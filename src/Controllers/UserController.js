const UserModel = require('../Models/UserModel');

// Create
exports.createUser = async (req, res) => {
    const User = new UserModel(req.body);
    try {
        await User.save();
        res.status(201).json({ status:"success",data: User });
    } catch (err) {
        res.status(400).json({ status:"fail", data:err.message });
    }
}

// Read
exports.getUsers = async (req,res) => {
    try {
        const data = await UserModel.find();
        res.status(200).json({ status:"success", data:data })
    } catch (err) {
        res.status(400).json({ status:"fail", data:err.message })
    }
}

exports.getUserByID = async (req,res) => {
    const id = req.params.id;
    const query = { _id:id };
    try {
        const data = await UserModel.find(query);
        res.status(200).json({ status:"success", data:data })
    } catch (err) {
        res.status(400).json({ status:"fail", data:err.message })
    }
}

// Update
exports.updateUser = async (req,res) => {
    const id = req.params.id;
    const query = { _id:id };
    const reqBody = req.body;
    try {
        const data = await UserModel.updateOne(query,reqBody);
        res.status(200).json({ status:"success", data:data });
    } catch (err) {
        res.status(400).json({ status:"fail", data:err.message });
    }
}


// Delete
exports.deleteUser = async (req,res) => {
    let id= req.params.id;
    let query = { _id:id };
    try {
        let data = await UserModel.deleteOne(query);
        res.status(200).json({ status:"success",data:data })
    } catch (err) {
        res.status(400).json({ status:"fail", data:err });
    }
}
