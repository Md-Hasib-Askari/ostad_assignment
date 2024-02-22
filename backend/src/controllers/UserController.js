import User from "../models/User.js";
import bcrypt from "bcrypt";
import {DecodeToken, EncodeToken} from "../utility/TokenHelper.js";
import EmailSend from "../utility/EmailHelper.js";

export const register = async (req, res) => {
  const { name, email, phone, password } = req.body;
  if (!name || !email || !phone || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    bcrypt.hash(password, 10, (err, hashedPass) => {
      if (err) {
        return res.status(500).json({ message: "Server error" });
      }
      const newUser = new User({ name, email, phone, password: hashedPass });
      newUser
        .save()
        .then(() => {
          return res
            .status(201)
            .json({ message: "User registered successfully", data: email });
        })
        .catch((err) => {
          return res.status(500).json({ message: err.message });
        });
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        return res.status(400).json({message: "All fields are required"});
    }
    try {
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({message: "Invalid credentials"});
        }
        if (user.status !== "active") {
            return res.status(400).json({message: "User is not active"});
        }
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                return res.status(500).json({message: err.message});
            }
            if (!result) {
                return res.status(400).json({message: "Invalid credentials"});
            }
            const token = EncodeToken(email, user._id);
            res.cookie('token', token, {httpOnly: true});
            return res.status(200).json({token, message: "User logged in successfully"});
        });
    } catch (err) {
        return res.status(500).json({message: err.message});
    }
}

export const authenticate = async (req, res) => {
    let token = req.headers.cookie;
    if (!token) {
        return res.status(400).json({message: "User not authenticated"});
    } else {
        token = token.split("=")[1];
    }
    try {
        const isAuthenticated = await DecodeToken(token);
        if (!isAuthenticated) {
            return res.status(400).json({message: "Unauthorized"});
        } else {
            return res.status(200).json({status: "success", message: "User authenticated"});
        }
    } catch (e) {
        return res.status(500).json({message: e.message});
    }
}

export const generateOtp = async (req, res) => {
    const email = req.params.email;
    if (!email) {
        return res.status(400).json({message: "Email is required"});
    }
    try {
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({message: "User does not exist"});
        } else if (user.status === "active") {
            return res.status(400).json({message: "Email is already verified"});
        }
        const generatedOTP = Math.floor(100000 + Math.random() * 900000);
        user.otp = generatedOTP;
        const EmailText = `Your OTP is ${generatedOTP}`;
        const EmailSubject = "OTP for Email Verification";
        await EmailSend(email, EmailText, EmailSubject)
        user.save()
            .then(() => {
                return res.status(200).json({message: "OTP sent successfully"});
            })
            .catch((err) => {
                return res.status(500).json({message: err.message});
            });
    } catch (e) {
        return res.status(500).json({message: e.message});
    }
}

export const verifyOtp = async (req, res) => {
    const email = req.params.email;
    const otp = req.params.otp;
    if (!email || !otp) {
        return res.status(400).json({message: "Email and OTP are required"});
    }
    try {
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({message: "User does not exist"});
        } else if (user.status === "active") {
            return res.status(400).json({message: "Email is already verified"});
        } else if (user.otp !== otp) {
            return res.status(400).json({message: "Invalid OTP"});
        }
        user.otp = null;
        user.status = "active";
        user.save()
            .then(() => {
                return res.status(200).json({status: "success", message: "OTP verified successfully"});
            })
            .catch((err) => {
                return res.status(500).json({message: err.message});
            });
    } catch (e) {
        return res.status(500).json({message: e.message});
    }
}

export const updateUser = async (req, res) => {
    const {email, user_id} = req.headers;
    try {
        const user = await User.findOneAndUpdate({email, _id: user_id}, req.body);
        if (!user) {
            return res.status(400).json({message: "User does not exist"});
        }
        return res.status(200).json({status: "success", message: "User updated successfully"});
    } catch (e) {
        return res.status(500).json({message: e.message});
    }

}

export const getUser = async (req, res) => {
    const {email, user_id} = req.headers;
    if (!email || !user_id) {
        return res.status(400).json({message: "Email and User ID are required"});
    }
    try {
        const user = await User.findOne({email, _id: user_id});
        if (!user) {
            return res.status(400).json({message: "User does not exist"});
        }
        const {password, otp, ...rest} = user._doc;
        return res.status(200).json({status: "success", data: rest});
    } catch (e) {
        return res.status(500).json({message: e.message});
    }
}