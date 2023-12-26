const {
    Wish,
    CreateWish, 
    RemoveWish
} = require("../Services/WishService");

exports.WishList = async(req,res) => {
    let result = await Wish(req);
    return res.status(200).json(result)
}

exports.SaveWishList = async(req,res) => {
    let result = await CreateWish(req);
    return res.status(200).json(result)
}

exports.RemoveWishList = async(req,res) => {
    let result = await RemoveWish(req);
    return res.status(200).json(result)
}