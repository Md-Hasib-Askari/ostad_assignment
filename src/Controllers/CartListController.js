const {
    Cart,
    RemoveCart,
    CreateCart,
    UpdateCartListService
} = require("../Services/CartService");

exports.CartList = async(req,res) => {
    let result = await Cart(req);
    return res.status(200).json(result)
}

exports.SaveCartList = async(req,res) => {
    let result = await CreateCart(req);
    return res.status(200).json(result)
}

exports.RemoveCartList = async(req,res) => {
    let result = await RemoveCart(req);
    return res.status(200).json(result)
}