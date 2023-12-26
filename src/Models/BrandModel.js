const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
    brandName: String,
    brandImg: String,
}, {versionKey: false, timestamps: true});

const BrandModel = mongoose.model('Brand', BrandSchema);
module.exports = BrandModel;