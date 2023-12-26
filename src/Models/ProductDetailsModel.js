const mongoose = require('mongoose');

const ProductDetailsSchema = new mongoose.Schema({
    img1: String, 
    img2: String, 
    img3: String, 
    img4: String,
    des: String, 
    color: String, 
    size: String, 
    productDetailsID: mongoose.Types.ObjectId, 
}, {versionKey: false, timestamps: true});

const ProductDetailsModel = mongoose.model('ProductDetails', ProductDetailsSchema);
module.exports = ProductDetailsModel;