const CartItemModel = require('../Models/CartItemModel');

// Create
exports.createItem = async (req, res) => {
    const item = new CartItemModel(req.body);
    try {
        await item.save();
        res.status(201).json({ status:"success",data: item });
    } catch (err) {
        res.status(400).json({ status:"fail", data:err.message });
    }
}

// Read
exports.getItem = async (req,res) => {
    try {
        const data = await CartItemModel.find();
        res.status(200).json({ status:"success", data:data })
    } catch (err) {
        res.status(400).json({ status:"fail", data:err.message })
    }
}

exports.getItemByID = async (req,res) => {
    const id = req.params.id;
    const query = { _id:id };
    try {
        const data = await CartItemModel.find(query);
        res.status(200).json({ status:"success", data:data })
    } catch (err) {
        res.status(400).json({ status:"fail", data:err.message })
    }
}

// Update
exports.updateItem = async (req,res) => {
    const id = req.params.id;
    const query = { _id:id };
    const reqBody = req.body;
    try {
        const data = await CartItemModel.updateOne(query,reqBody);
        res.status(200).json({ status:"success", data:data });
    } catch (err) {
        res.status(400).json({ status:"fail", data:err.message });
    }
}


// Delete
exports.deleteItem = async (req,res) => {
    let id= req.params.id;
    let query = { _id:id };
    try {
        let data = await CartItemModel.deleteOne(query);
        res.status(200).json({ status:"success",data:data })
    } catch (err) {
        res.status(400).json({ status:"fail", data:err });
    }
}
