const dotenv = require('dotenv');
dotenv.config({
    path: __dirname + "/config.env",
})
const mongoose = require('mongoose');

exports.connectDB = async (req, res) => {
    const db_url = "mongodb://localhost:27017";
    console.log(db_url);
    try {
        mongoose.connect(db_url);
        console.log("Database Connected Successfully");
        res.status(200).json({
            status: "success",
            message: "Database Connected Successfully",
        })
    } catch (err) {
        console.log(err)
        res.status(404).json({
            status: "error",
            message: "Couldn't connect to database",
        })
    }
}