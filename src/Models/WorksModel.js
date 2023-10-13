const mongoose = require('mongoose');
const WorkSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    classNote : String,
    description : String,
    status : {
        type: String,
        default: "pending"
    },
    email : {
        type: String,
        required: true
    },
}, {timestamps: true, versionKey: false});

const WorksModel = mongoose.model('work', WorkSchema);
module.exports = WorksModel;