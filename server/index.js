import dotenv from 'dotenv';
import express from 'express';

import bodyParser from 'body-parser';
import twilio from 'twilio';

import mongoose from 'mongoose';
import User from './userSchema.js';
import Zorko from './zorkoSchema.js';
const PORT= 3000;
const app = express();

dotenv.config();

const accountSid=process.env.ACCOUNT_SID;
const authToken=process.env.AUTH_TOKEN;
const verifySid=process.env.VERIFY_SID;
const client = twilio(accountSid, authToken);

app.use(bodyParser.urlencoded({ extended: true }));

const verifyOTP = async (number, otpCode) => {
    try {
        const verification_check = await client.verify.v2.services(verifySid)
            .verificationChecks.create({ to: number, code: otpCode });
        return verification_check.status;
    } catch (error) 
    {
        console.error("Error during OTP verification:", error);
        throw error;
    }
};

app.post('/sendOTP', async (req, res) => {
    const { number } = req.body;
    console.log(number);
    try {
        const verification = await client.verify.v2.services(verifySid)
            .verifications.create({ to: number, channel: "sms" });
        console.log(verification.status);
        res.send("OTP sent successfully");
    } 
    catch (error) 
    {
        console.error("Error sending OTP:", error);
        res.status(500).send("An error occurred while sending OTP");
    }
});

app.post('/verifyOTP', async (req, res) => {
    const { number, otpCode } = req.body;
    console.log(number, otpCode);
    try {
        const verificationStatus = await verifyOTP(number, otpCode);
        if (verificationStatus === "approved") 
        {
            res.send("OTP verified successfully");
        } 
        else if (verificationStatus === "pending") 
        {
            res.send("Something went wrong. Please try again");
        } 
       
    } 
    catch (error) 
    {
        console.error("Error verifying OTP:", error);
        res.status(500).send("An error occurred during OTP verification");
    }
});





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

app.post('/addUser',(req,res)=>{
    const {name,age,email,recommendation,phone}=req.body;
    const user=new User({name,age,email,recommendation,phone});
    user.save().then(()=>{
        res.send("User added successfully");
    }).catch((error)=>{
        console.error("Error adding user:",error);
        res.status(500).send("An error occurred while adding user");
    });
});

app.get('/getUsers', async (req, res) => {
    try 
    {
        const collection = db.collection('users');
        const users = await collection.find({}).toArray();
        res.send(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send("An error occurred while fetching users");
    }
});

app.post('/addUser',(req,res)=>{
    const {name,age,email,recommendation,phone}=req.body;
    console.log(name,age,email,recommendation,phone);
    const user=new User({name,age,email,recommendation,phone});
    user.save().then(()=>{
        res.send("User added successfully");
    }).catch((error)=>{
        console.error("Error adding user:",error);
        res.status(500).send("An error occurred while adding user");
    });
}  );

app.get('/getUserRecommendations', async (req, res) => {
    try {
        const client = await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = client.db('htt');
        const collection = db.collection('recommendations');
        const recommendations = await collection.find({}).toArray();
        res.send(recommendations);
    } catch (error) {
        console.error("Error fetching recommendations:", error);
        res.status(500).send("An error occurred while fetching recommendations");
    }
});

app.post("/postMenu",(req,res)=>{
    const {food,price,people,upvote,downvote,location,date}=req.body;
    const zorko=new Zorko({food,price,people,upvote,downvote,location,date});
    zorko.save().then(()=>{
        res.send("Menu added successfully");
    }).catch((error)=>{
        console.error("Error adding menu:",error);
        res.status(500).send("An error occurred while adding menu");
    });
});

app.get('/getMenu', async (req, res) => {
    try {
        const collection = db.collection('menu');
        const menu = await collection.find({}).toArray();
        res.send(menu);
    } catch (error) {
        console.error("Error fetching menu:", error);
        res.status(500).send("An error occurred while fetching menu");
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
    });



