const mongoose = require('mongoose');
const OTPSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true
    },
    otp : String,
    status : {
        type: Number,
    },
}, {timestamps: true, versionKey: false});

const OTPModel = mongoose.model('otp', OTPSchema);
module.exports = OTPModel;