import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    id: Number,
    name: String,
    location: {
        latitude: Number,
        longitude: Number
    },
    foodMenu:[{
        foodName:String,
        quantity:Number,
        price:Number
    }],
    DateOfJoining:Date,
    phone:Number,
    email:String,
    age:Number,
    upVotes:Number,
    downVotes:Number,
    password:String
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
