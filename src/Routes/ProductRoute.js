const router = require('express').Router();
const ProductController = require("../Controllers/ProductController");

// Create
router.post("/addProduct", ProductController.createProduct);

// Read
router.get("/allProduct", ProductController.getProducts);
router.get("/allProduct/:id", ProductController.getProductByID);

// Update
router.post("/updateProduct/:id", ProductController.updateProduct);

// Delete
router.get("/deleteProduct/:id", ProductController.deleteProduct);



module.exports=router;