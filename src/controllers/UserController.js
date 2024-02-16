import User from "../models/User.js";
import bcrypt from "bcrypt";
import {EncodeToken} from "../utility/TokenHelper.js";

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
            .json({ message: "User registered successfully" });
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
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                return res.status(500).json({message: err.message});
            }
            if (!result) {
                return res.status(400).json({message: "Invalid credentials"});
            }
            const token = EncodeToken(email, user._id);
            return res.status(200).json({token, message: "User logged in successfully"});
        });
    } catch (err) {
        return res.status(500).json({message: err.message});
    }
}

export const generateOtp = async (req, res) => {
    const {email} = req.body;
    if (!email) {
        return res.status(400).json({message: "Email is required"});
    }
    try {
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({message: "User does not exist"});
        }
        user.otp = Math.floor(100000 + Math.random() * 900000);
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
    const {email, otp} = req.body;
    if (!email || !otp) {
        return res.status(400).json({message: "Email and OTP are required"});
    }
    try {
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({message: "User does not exist"});
        }
        if (user.otp !== otp) {
            return res.status(400).json({message: "Invalid OTP"});
        }
        user.otp = null;
        user.save()
            .then(() => {
                return res.status(200).json({message: "OTP verified successfully"});
            })
            .catch((err) => {
                return res.status(500).json({message: err.message});
            });
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
        return res.status(200).json({rest});
    } catch (e) {
        return res.status(500).json({message: e.message});
    }
}