const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true
    },
    firstName : String,
    lastName : String,
    mobile : String,
    password : {
        type: String,
        required: true
    },
    address : String,
    roll : String,
    _class : String,
}, {timestamps: true, versionKey: false});

const StudentsModel = mongoose.model('students', StudentSchema);
module.exports = StudentsModel;