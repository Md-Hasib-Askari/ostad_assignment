const router = require('express').Router();

const adminController = require('../Controllers/adminController')
const subAdminController = require('../Controllers/subAdminController')
const userController = require('../Controllers/userController')
const postController = require('../Controllers/postController')

// Admin Routes
router.get('/admin/create', adminController.create);
router.get('/admin/read', adminController.read);
router.get('/admin/update', adminController.update);
router.get('/admin/delete', adminController.delete);

// Sub Admin Routes
router.get('/sub-admin/create', subAdminController.create);
router.get('/sub-admin/read', subAdminController.read);
router.get('/sub-admin/update', subAdminController.update);
router.get('/sub-admin/delete', subAdminController.delete);

// User Routes
router.get('/user/create', userController.create);
router.get('/user/read', userController.read);
router.get('/user/update', userController.update);
router.get('/user/delete', userController.delete);

// Post Routes
router.get('/post/create', postController.create);
router.get('/post/read', postController.read);
router.get('/post/update', postController.update);
router.get('/post/delete', postController.delete);

module.exports = router;