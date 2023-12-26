const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: String, 
    shortDes: String, 
    price: Number, 
    discount: Number,
    discountPrice: Number, 
    image: String, 
    star: Number, 
    stock: Number, 
    remark: String, 
    categoryID: mongoose.Types.ObjectId, 
    brandID: mongoose.Types.ObjectId,
}, {versionKey: false, timestamps: true});

const ProductModel = mongoose.model('Product', ProductSchema);
module.exports = ProductModel;