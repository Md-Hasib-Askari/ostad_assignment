const mongoose = require('mongoose');

const ProductSliderSchema = new mongoose.Schema({
    title: String, 
    des: String, 
    price: Number, 
    img: String, 
    productID: mongoose.Types.ObjectId, 
}, {versionKey: false, timestamps: true});

const ProductSliderModel = mongoose.model('ProductSlider', ProductSliderSchema);
module.exports = ProductSliderModel;