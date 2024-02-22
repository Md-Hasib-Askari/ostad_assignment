import express from 'express';
const router = express.Router();
import * as UserController from '../controllers/UserController.js';
import * as ProductController from "../controllers/ProductController.js";
import Auth from '../middlewares/Auth.js';

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/otp/:email', UserController.generateOtp);
router.get('/verify/:email/:otp', UserController.verifyOtp);
router.get('/authenticate', Auth, UserController.authenticate);
router.post('/update-user', Auth, UserController.updateUser);
router.get('/user', Auth, UserController.getUser);

router.get('/products', Auth, ProductController.getProducts);
router.get('/products/:id', Auth, ProductController.getProduct);
router.post('/add-product', Auth, ProductController.createProduct);
router.post('/update-product/:id', Auth, ProductController.updateProduct);
router.get('/delete-product/:id', Auth, ProductController.deleteProduct);

export default router;
