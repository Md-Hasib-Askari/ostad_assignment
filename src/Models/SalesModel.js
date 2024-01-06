const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
    product: String,
    department: String,
    quantity: Number,
    price: Number,
    date: Date
}, {versionKey: false, timestamps: true});

const Sales = mongoose.model('Sales', salesSchema);
module.exports = Sales;