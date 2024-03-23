import mongoose from 'mongoose';


const zorkoSchema=new mongoose.schema({
    food: String,
    price: Number
})


const Zorko = mongoose.model('Zorko', zorkoSchema);

module.exports = Zorko;