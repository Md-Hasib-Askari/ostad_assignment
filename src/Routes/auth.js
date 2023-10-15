const router = require('express').Router();
const StudentController = require("../controllers/StudentController");

router.get("/RecoverVerifyEmail/:email",StudentController.RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp",StudentController.RecoverVerifyOTP);
router.post("/RecoverResetPass",StudentController.RecoverResetPass);

module.exports=router;