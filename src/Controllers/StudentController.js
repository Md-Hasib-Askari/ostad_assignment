const bcrypt = require('bcrypt');
const StudentsModel = require('../Models/StudentsModel');
const OTPModel = require('../Models/OTPModel');
const {jwtTokenGenerate} = require("../Helper/jwtTokenGenerator");
const SendEmail = require("../Helper/sendMail");

// Registration
exports.registration = async (req, res) => {
    try {
        const {email, firstName, lastName, mobile, password, address, roll, _class} = req.body;
        const data = await StudentsModel.aggregate([{$match: {email}}]).exec();
        if (data.length > 0) {
            res.status(400).json({status:"fail", data:"Email already exists!"});
            return;
        }
        const encrypted = await bcrypt.hash(password, 10);
        const reqBody = {email, firstName, lastName, mobile, password:encrypted, address, roll, _class};
        await StudentsModel.create(reqBody);
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
        const [data] = await StudentsModel.aggregate([{$match: {email}}]).exec();
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
        let data = await StudentsModel.find(query);
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
        let data = await StudentsModel.updateOne(query,reqBody);
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
        let data = await StudentsModel.deleteOne(query);
        res.status(200).json({status:"success",data:data})
    } catch (err) {
        res.status(400).json({status:"fail", data:err.toString()});
    }
}

// Email
exports.RecoverVerifyEmail=async (req,res)=>{
    let email = req.params.email;
    let OTPCode = Math.floor(100000 + Math.random() * 900000)
    try {
        // Email Account Query
        let studentCount = (await StudentsModel.aggregate([{$match: {email: email}}, {$count: "total"}]));
        if(studentCount.length>0){
            // OTP Insert
            let createOTP = await OTPModel.create({email: email, otp: OTPCode})
            // Email Send
            let otpStatus = await SendEmail(email,"Your PIN Code is " + OTPCode + " student PIN Verification");
            res.status(200).json({status: "success", data: otpStatus})
        }
        else{
            res.status(200).json({status: "fail", data: "No User Found"})
        }

    }catch (err) {
        res.status(200).json({status: "fail", data:err.toString()})
    }

}

// OTP
exports.RecoverVerifyOTP = async (req,res)=>{
    let email = req.params.email;
    let OTPCode = req.params.otp;
    let status=0;
    let statusUpdate=1;
    try {
        let OTPCount = await OTPModel.aggregate([{$match: {email: email, otp: OTPCode, status: status}}, {$count: "total"}])
        if (OTPCount.length>0) {
            let OTPUpdate = await OTPModel.updateOne({email: email, otp: OTPCode, status: status}, {
                email: email,
                otp: OTPCode,
                status: statusUpdate
            })
            res.status(200).json({status: "success", data: OTPUpdate})
        } else {
            res.status(200).json({status: "fail", data: "Invalid OTP Code"})
        }
    }
    catch (err) {
        res.status(200).json({status: "fail", data:err.toString()})
    }
}

// Password Reset
exports.RecoverResetPass = async (req,res) => {
    let email = req.body['email'];
    let OTPCode = req.body['OTP'];
    let NewPass =  req.body['password'];
    let statusUpdate=1;
    try {
        let OTPUsedCount = await OTPModel.aggregate([{$match: {email: email, otp: OTPCode, status: statusUpdate}}, {$count: "total"}])
        if (OTPUsedCount.length>0) {
            let PassUpdate = await StudentsModel.updateOne({email: email}, {
                password: NewPass
            })
            res.status(200).json({status: "success", data: PassUpdate})
        } else {
            res.status(200).json({status: "fail", data: "Invalid Request"})
        }
    }
    catch (err) {
        res.status(200).json({status: "fail", data:err.toString()})
    }
}
