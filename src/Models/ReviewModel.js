const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    productID: mongoose.Types.ObjectId,
    userID: mongoose.Types.ObjectId,
    des: String,
    rating: Number,
}, {versionKey: false, timestamps: true});

const ReviewModel = mongoose.model('Review', ReviewSchema);
module.exports = ReviewModel;