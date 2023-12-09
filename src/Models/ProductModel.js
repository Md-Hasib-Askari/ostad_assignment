const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        ref: 'Category',
        required: true,
    },
    imageUrl: String,
}, {versionKey: false, timestamps: true});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;