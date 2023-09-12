const router = require('express').Router();

const blogController = require('../Controllers/blogController')
const commentController = require('../Controllers/commentController')
const messageController = require('../Controllers/messageController')
const portfolioController = require('../Controllers/portfolioController')
const productController = require('../Controllers/productController')

// Blog Routes
router.get('/blog/create', blogController.create);
router.get('/blog/read', blogController.read);
router.get('/blog/update', blogController.update);
router.get('/blog/delete', blogController.delete);

// Comment Routes
router.get('/comment/create', commentController.create);
router.get('/comment/read', commentController.read);
router.get('/comment/update', commentController.update);
router.get('/comment/delete', commentController.delete);

// Message Routes
router.get('/message/create', messageController.create);
router.get('/message/read', messageController.read);
router.get('/message/update', messageController.update);
router.get('/message/delete', messageController.delete);

// Portfolio Routes
router.get('/portfolio/create', portfolioController.create);
router.get('/portfolio/read', portfolioController.read);
router.get('/portfolio/update', portfolioController.update);
router.get('/portfolio/delete', portfolioController.delete);

// Product Routes
router.get('/product/create', productController.create);
router.get('/product/read', productController.read);
router.get('/product/update', productController.update);
router.get('/product/delete', productController.delete);

module.exports = router;