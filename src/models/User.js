import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "pending"
    },
    otp: {
        type: String,
        default: null
    },
}, {timestamps: true, versionKey: false});

export default mongoose.model('User', userSchema);
