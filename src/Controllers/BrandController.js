const { getAllBrands } = require("../services/ProductService");

exports.BrandList = async (req,res) => {
    let result = await getAllBrands();
    return res.status(200).json(result)
}
