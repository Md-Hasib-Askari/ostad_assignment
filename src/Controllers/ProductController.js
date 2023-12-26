const {
    AllFeatures,
    DetailsBYID,
    AllCategories,
    AllBrands,
    SliderListService,
    ProductByRemark,
    ProductByCategory,
    ProductBYBrand,
    ProductByCategoryLimit10,
    ProductBySlider,
    ProductByKeyword,
    ListBySmilierService
} = require('../Services/ProductService')

exports.ProductBrandList = async(req,res) => {
    let result = await AllBrands();
    return res.status(200).json(result)
}

exports.ProductCategoryList = async(req,res) => {
    let result = await AllCategories();
    return res.status(200).json(result)
}

exports.ProductSliderList = async(req,res) => {
    let result = await SliderListService();
    return res.status(200).json(result)
}

exports.ProductListByBrand = async(req,res) => {
    let result = await ProductBYBrand(req);
    return res.status(200).json(result)
}

exports.ProductListByCategory = async(req,res) => {
    let result = await ProductByCategory(req);
    return res.status(200).json(result)
}

exports.ProductListBySmilier = async(req,res) => {
    let result = await ListBySmilierService(req);
    return res.status(200).json(result)
}

exports.ProductListByKeyword = async(req,res) => {
    let result = await ProductByKeyword(req);
    return res.status(200).json(result)
}

exports.ProductListByRemark = async(req,res) => {
    let result = await ProductByRemark(req);
    return res.status(200).json(result)
}

exports.ProductDetails = async(req,res) => {
    let result = await DetailsBYID(req);
    return res.status(200).json(result)
}

exports.ProductReviewList = async(req,res) => {
    let result = await ProductByRemark(req);
    return res.status(200).json(result)
}