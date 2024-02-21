import Product from "../models/Products.js";

export const getProducts = async (req, res) => {
    let products;
    const user = req.headers.user_id;
    try {
        products = await Product.find({user});
        return res.status(200).json({status: "success", message: "Products fetched successfully", data: products});
    } catch (err) {
        if (!products) return res.status(200).json({message: "No products found"});
        return res.status(500).json({message: err.message});
    }
}

export const getProduct = async (req, res) => {
    const {id} = req.params;
    const user = req.headers.user_id;
    try {
        const product = await Product.find({user, _id: id});
        if (!product) return res.status(200).json({message: "Product not found"});
        return res.status(200).json({status: "success",message: "Product fetched successfully", data: product});
    } catch (err) {
        return res.status(500).json({message: err.message});
    }
}

export const createProduct = async (req, res) => {
    const {name, brand, category, description, image} = req.body;
    const user = req.headers.user_id;
    const newProduct = new Product({name, brand, category, description, image, user});
    let savedProduct;
    try {
        savedProduct = await newProduct.save();
        return res.status(200).json({message: "Product created successfully", data: savedProduct});
    } catch (err) {
        return res.status(500).json({message: err.message});
    }
}

export const updateProduct = async (req, res) => {
    const {id} = req.params;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body);
        if (!updatedProduct) return res.status(200).json({message: "Product not found"});
        return res.status(200).json({message: "Product updated successfully", data: updatedProduct});
    } catch (err) {
        return res.status(500).json({message: err.message});
    }
}

export const deleteProduct = async (req, res) => {
    const {id} = req.params;
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) return res.status(200).json({message: "Product not found"});
        return res.status(200).json({message: "Product deleted successfully", data: deletedProduct});
    }
    catch (err) {
        return res.status(500).json({message: err.message});
    }
}