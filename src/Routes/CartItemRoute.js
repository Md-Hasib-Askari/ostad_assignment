const cartRouter = require('express').Router();
const CartItemController = require("../Controllers/CartItemController");

// Create
cartRouter.post("/createItem", CartItemController.createItem);

// Read
cartRouter.get("/getItem", CartItemController.getItem);
cartRouter.get("/getItem/:id", CartItemController.getItemByID);

// Update
cartRouter.post("/updateItem/:id", CartItemController.updateItem);

// Delete
cartRouter.get("/deleteItem/:id", CartItemController.deleteItem);

module.exports=cartRouter;