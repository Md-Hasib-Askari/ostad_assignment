const router = require('express').Router();
const WorkController = require("../controllers/WorkController");

// Create
router.post("/createWork", WorkController.createWork);

// Read
router.get("/getWorks", WorkController.getAllWorks);
router.get("/getWorks/:id", WorkController.getWorkByID);

// Update
router.post("/updateWork/:id", WorkController.updateWork);

// Delete
router.get("/deleteWork/:id", WorkController.deleteWork);

module.exports=router;