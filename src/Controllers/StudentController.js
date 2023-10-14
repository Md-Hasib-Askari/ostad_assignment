const StudentController = require('../Models/StudentsModel');

// Create
exports.registration = async (req, res) => {
    try {
        const reqBody = req.body;
        await StudentController.create(reqBody);
        res.status(201).json({status:"success",data: reqBody});
    } catch (err) {
        res.status(400).json({status:"fail", data:err});
    }
}

// Read
exports.readStudent = async (req,res) => {
    try {
        let data = await StudentController.find();
        res.status(200).json({status:"success", data:data})
    } catch (err) {
        res.status(400).json({status:"fail", data:err})
    }
}

// Read By ID
exports.readStudentByID = async (req,res) => {
    let id = req.params.id;
    let query = {_id:id};
    try {
        let data = await StudentController.find(query);
        res.status(200).json({status:"success", data:data})
    } catch (err) {
        res.status(400).json({status:"fail", data:err})
    }
}


// Update
exports.updateStudent = async (req,res) => {
    let id= req.params.id;
    let query={_id:id};
    let reqBody = req.body;
    try {
        let data = await StudentController.updateOne(query,reqBody);
        res.status(200).json({status:"success", data:data});
    } catch (err) {
        res.status(400).json({status:"fail", data:err});
    }
}


// Delete
exports.deleteStudent = async (req,res) => {
    let id= req.params.id;
    let query={_id:id};
    try {
        let data = await StudentController.deleteOne(query);
        res.status(200).json({status:"success",data:data})
    } catch (err) {
        res.status(400).json({status:"fail", data:err});
    }
}
