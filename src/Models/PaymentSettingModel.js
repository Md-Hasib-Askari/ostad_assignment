const mongoose = require('mongoose');

const PaymentSettingSchema = new mongoose.Schema({
    store_id: String,
    store_passwd: String,
    currency: String,
    success_url: String,
    fail_url: String,
    cancel_url: String,
    ipn_url: String,
    init_url: String,
}, {versionKey: false, timestamps: true});

const PaymentSetting = mongoose.model('PaymentSetting', PaymentSettingSchema);
module.exports = PaymentSetting;