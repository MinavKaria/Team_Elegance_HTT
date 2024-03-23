import mongoose from 'mongoose';


const zorkoSchema=new mongoose.schema({
    food: String,
    price: Number,
    people: Number,
    upvote: Number,
    downvote: Number,
    location: String,
    date: Date,
})


const Zorko = mongoose.model('Zorko', zorkoSchema);

module.exports = Zorko;