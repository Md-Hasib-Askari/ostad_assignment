const userRouter = require('express').Router();
const UserController = require("../Controllers/UserController");

// Create
userRouter.post("/addUser", UserController.createUser);

// Read
userRouter.get("/allUser", UserController.getUsers);
userRouter.get("/allUser/:id", UserController.getUserByID);

// Update
userRouter.post("/updateUser/:id", UserController.updateUser);

// Delete
userRouter.get("/deleteUser/:id", UserController.deleteUser);


module.exports=userRouter;