import express from 'express';
import  bodyParser  from 'body-parser';
import mongoose from 'mongoose';
import Admin from './adminSchema.js';
import cors from 'cors';

const app = express();
const port=3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

const uri = 'mongodb+srv://htt20:abcd@cluster0.fjislfp.mongodb.net/';


try
{
    mongoose.connect(uri);
    console.log("Connected to MongoDB");
}
catch (error)
{
    console.error("Error connecting to MongoDB:", error);
}

app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const admin = new Admin({ name, email, password });
        await admin.save();
        res.send("Admin signed up successfully");
    } catch (error) {
        console.error("Error signing up:", error);
        res.status(500).send("An error occurred while signing up");
    }
});

// Login Endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const admin = await Admin.findOne({ email, password });
        if (admin) {
            res.send("Login successful");
        } else {
            res.status(401).send("Invalid email or password");
        }
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).send("An error occurred while logging in");
    }
});


app.post('/addAdmin',(req,res)=>{
    const { id, name, location, foodMenu, DateOfJoining, phone, email, age, upVotes, downVotes, password, offers } = req.body;
const admin = new Admin({ id, name, location, foodMenu, DateOfJoining, phone, email, age, upVotes, downVotes, password, offers });

    admin.save().then(()=>{
        res.send("Admin added successfully");
    }).catch((error)=>{
        console.error("Error adding admin:",error);
        res.status(500).send("An error occurred while adding admin");
    });
});

app.put('/updateAdmin/:id',(req,res)=>{
    const {name,location,foodMenu,DateOfJoining,phone,email,age,upVotes,downVotes,password}=req.body;
    const id=req.params.id;
    Admin.findByIdAndUpdate(id,{name,location,foodMenu,DateOfJoining,phone,email,age,upVotes,downVotes,password}).then(()=>{
        res.send("Admin updated successfully");
    }).catch((error)=>{
        console.error("Error updating admin:",error);
        res.status(500).send("An error occurred while updating admin");
    });
});

app.get('/getAdmin', async (req, res) => {
        try {
            console.log("Getting admins");
            const admins = await Admin.find();
            res.send(admins);
        } catch (error) {
            console.error("Error getting admins:", error);
            res.status(500).send("An error occurred while getting admins");
        }
    });



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});