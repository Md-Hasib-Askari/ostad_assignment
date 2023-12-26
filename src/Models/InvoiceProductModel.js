const mongoose = require('mongoose');

const InvoiceProductSchema = new mongoose.Schema({
    userID: mongoose.Types.ObjectId,
    productID: mongoose.Types.ObjectId,
    invoiceID: mongoose.Types.ObjectId,
    qty: Number,
    price: Number,
    color: String,
    size: String,
}, {versionKey: false, timestamps: true});

const InvoiceProduct = mongoose.model('InvoiceProduct', InvoiceProductSchema);
module.exports = InvoiceProduct;