const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    categoryName: String,
    categoryImg: String,
}, {versionKey: false, timestamps: true});

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;