const router = require('express').Router();
const StudentController = require("../controllers/StudentController");
const AuthVerifyMiddleware = require('../Middlewares/AuthVerifyMiddleware')

// registration
router.post("/registration", StudentController.registration);

// Login
router.post("/login", StudentController.login);

// Get Student Profile
router.get("/profile", StudentController.getProfile);

// Update Student
router.post("/updateStudent", AuthVerifyMiddleware, StudentController.updateStudent);

// Delete Student
router.get("/deleteStudent", StudentController.deleteStudent);

module.exports=router;