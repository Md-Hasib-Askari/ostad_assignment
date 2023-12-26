const mongoose = require('mongoose');

const WishSchema = new mongoose.Schema({
    productID: mongoose.Types.ObjectId,
    userID: mongoose.Types.ObjectId,
}, {versionKey: false, timestamps: true});

const WishModel = mongoose.model('Wish', WishSchema);
module.exports = WishModel;