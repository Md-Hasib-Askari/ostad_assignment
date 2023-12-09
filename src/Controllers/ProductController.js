const ProductModel = require('../Models/ProductModel');

// Create
exports.createProduct = async (req, res) => {
    const Product = new ProductModel(req.body);
    try {
        await Product.save();
        res.status(201).json({ status:"success",data: Product });
    } catch (err) {
        res.status(400).json({ status:"fail", data:err.message });
    }
}

// Read
exports.getProducts = async (req,res) => {
    try {
        const data = await ProductModel.find();
        res.status(200).json({ status:"success", data:data })
    } catch (err) {
        res.status(400).json({ status:"fail", data:err.message })
    }
}

exports.getProductByID = async (req,res) => {
    const id = req.params.id;
    const query = { _id:id };
    try {
        const data = await ProductModel.find(query);
        res.status(200).json({ status:"success", data:data })
    } catch (err) {
        res.status(400).json({ status:"fail", data:err.message })
    }
}

// Update
exports.updateProduct = async (req,res) => {
    const id = req.params.id;
    const query = { _id:id };
    const reqBody = req.body;
    try {
        const data = await ProductModel.updateOne(query,reqBody);
        res.status(200).json({ status:"success", data:data });
    } catch (err) {
        res.status(400).json({ status:"fail", data:err.message });
    }
}


// Delete
exports.deleteProduct = async (req,res) => {
    let id= req.params.id;
    let query = { _id:id };
    try {
        let data = await ProductModel.deleteOne(query);
        res.status(200).json({ status:"success",data:data })
    } catch (err) {
        res.status(400).json({ status:"fail", data:err });
    }
}
