const mongoose = require('mongoose');

const FeaturesSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
}, {versionKey: false, timestamps: true});

const Features = mongoose.model('Features', FeaturesSchema);
module.exports = Features;