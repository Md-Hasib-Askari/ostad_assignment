const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
    userID: mongoose.Types.ObjectId,
    payable: Number,
    cus_details: String,
    ship_details: String,
    tran_id: String,
    val_id: String,
    payment_status: String,
    delivery_status: String,
    total: Number,
    vat: Number,
}, {versionKey: false, timestamps: true});

const Invoice = mongoose.model('Invoice', InvoiceSchema);
module.exports = Invoice;