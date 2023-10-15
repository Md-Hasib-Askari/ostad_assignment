const bcrypt = require('bcrypt');
const StudentController = require('../Models/StudentsModel');
const jwt = require('jsonwebtoken');
const {jwtTokenGenerate} = require("../Helper/jwtTokenGenerator");

// Registration
exports.registration = async (req, res) => {
    try {
        const {email, firstName, lastName, mobile, password, address, roll, _class} = req.body;
        const data = await StudentController.aggregate([{$match: {email}}]).exec();
        if (data.length > 0) {
            res.status(400).json({status:"fail", data:"Email already exists!"});
            return;
        }
        const encrypted = await bcrypt.hash(password, 10);
        const reqBody = {email, firstName, lastName, mobile, password:encrypted, address, roll, _class};
        await StudentController.create(reqBody);
        res.status(201).json({status:"success",data: reqBody});
    } catch (err) {
        console.log(err);
        res.status(400).json({status:"fail", data:err.toString()});
    }
}

// Login
exports.login = async (req,res) => {
    const {email, password} = req.body;
    try {
        const [data] = await StudentController.aggregate([{$match: {email}}]).exec();
        if (data) {
            await bcrypt.compare(password, data['password'], (err, result) => {
                if (err) {
                    res.status(400).json({status:"fail", data:err.toString()})
                } else if (result) {
                    let token = jwtTokenGenerate("mysecretkey", data['email']);
                    res.cookie("token", token, {httpOnly: true});
                    res.status(200).json({status:"success", data, token});
                } else {
                    res.status(200).json({status:"fail", data:"unauthorized"})
                }
            });
        } else {
            res.status(400).json({status:"fail", data:"Student Not Found!"});
        }
    } catch (err) {
        res.status(400).json({status:"fail", data:err.toString()})
    }
}

// Read By ID
exports.getProfile = async (req,res) => {
    let email = req.cookies['email'];
    let query = {email};
    try {
        let data = await StudentController.find(query);
        res.status(200).json({status:"success", data:data})
    } catch (err) {
        res.status(400).json({status:"fail", data:err.toString()})
    }
}


// Update
exports.updateStudent = async (req,res) => {
    let email = req.cookies['email'];
    let query={email};
    let reqBody = req.body;
    try {
        if (reqBody['password']) {
            reqBody['password'] = await bcrypt.hash(reqBody['password'], 10);
        }
        let data = await StudentController.updateOne(query,reqBody);
        if (reqBody['email']) {
            let token = jwtTokenGenerate("mysecretkey", reqBody['email']);
            res.cookie('token', token)
        }
        res.status(200).json({status:"success", data:data});
    } catch (err) {
        res.status(400).json({status:"fail", data:err.toString()});
    }
}


// Delete
exports.deleteStudent = async (req,res) => {
    let email = req.cookies['email'];
    let query={email};
    try {
        let data = await StudentController.deleteOne(query);
        res.status(200).json({status:"success",data:data})
    } catch (err) {
        res.status(400).json({status:"fail", data:err.toString()});
    }
}
