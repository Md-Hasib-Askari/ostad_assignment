import express from 'express';
const router = express.Router();
import * as UserController from '../controllers/UserController.js';
import Auth from '../middlewares/Auth.js';

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/otp/:email', UserController.generateOtp);
router.get('/verify/:email/:otp', UserController.verifyOtp);
router.get('/user', Auth, UserController.getUser);

export default router;
