const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    productID: mongoose.Types.ObjectId,
    userID: mongoose.Types.ObjectId,
    color: String,
    price: Number,
    qty: Number,
    size: String,
}, {versionKey: false, timestamps: true});

const CartModel = mongoose.model('Cart', cartSchema);
module.exports = CartModel;