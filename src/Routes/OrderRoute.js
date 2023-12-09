const router = require('express').Router();
const OrderController = require("../Controllers/OrderController");

// Create
router.post("/addOrder", OrderController.createOrder);

// Read
router.get("/allOrders", OrderController.getOrder);
router.get("/allOrders/:id", OrderController.getOrderByID);

// Update
router.post("/updateOrder/:id", OrderController.updateOrder);

// Delete
router.get("/deleteOrder/:id", OrderController.deleteOrder);



module.exports=router;