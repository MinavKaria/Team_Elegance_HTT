import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    recommendation: Array,
    phone: String,
});

// Create a model
const User = mongoose.model('User', userSchema);

export default User;
