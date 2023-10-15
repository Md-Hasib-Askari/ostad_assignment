const router = require('express').Router();
const OTPController = require("../controllers/OTPController");

// Create
router.post("/createOTP", OTPController.createOTP);

// Read
router.get("/getOTPs", OTPController.getAllOTPs);
router.get("/getOTPs/:id", OTPController.getOTPByID);

// Update
router.post("/updateOTP/:id", OTPController.updateOTP);

// Delete
router.get("/deleteOTP/:id", OTPController.deleteOTP);

module.exports=router;