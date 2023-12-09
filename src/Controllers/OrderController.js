const OrderModel = require('../Models/OrderModel');

// Create
exports.createOrder = async (req, res) => {
    const order = new OrderModel(req.body);
    try {
        await order.save();
        res.status(201).json({ status:"success",data: order });
    } catch (err) {
        res.status(400).json({ status:"fail", data:err.message });
    }
}

// Read
exports.getOrder = async (req,res) => {
    try {
        const data = await OrderModel.find();
        res.status(200).json({ status:"success", data:data })
    } catch (err) {
        res.status(400).json({ status:"fail", data:err.message })
    }
}

exports.getOrderByID = async (req,res) => {
    const id = req.params.id;
    const query = { _id:id };
    try {
        const data = await OrderModel.find(query);
        res.status(200).json({ status:"success", data:data })
    } catch (err) {
        res.status(400).json({ status:"fail", data:err.message })
    }
}

// Update
exports.updateOrder = async (req,res) => {
    const id = req.params.id;
    const query = { _id:id };
    const reqBody = req.body;
    try {
        const data = await OrderModel.updateOne(query,reqBody);
        res.status(200).json({ status:"success", data:data });
    } catch (err) {
        res.status(400).json({ status:"fail", data:err.message });
    }
}


// Delete
exports.deleteOrder = async (req,res) => {
    let id= req.params.id;
    let query = { _id:id };
    try {
        let data = await OrderModel.deleteOne(query);
        res.status(200).json({ status:"success",data:data })
    } catch (err) {
        res.status(400).json({ status:"fail", data:err });
    }
}
