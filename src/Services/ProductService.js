const CategoryModel = require("../models/CategoryModel");
const BrandModel = require("../models/BrandModel");
const ProductModel = require("../models/ProductModel");
const mongoose = require("mongoose");
const ProductSliderModel = require("../models/ProductSliderModel");
const ProductDetailsModel = require("../models/ProductDetailsModel");
const FeaturesModel = require("../models/FeaturesModel");

const ObjectId = mongoose.Types.ObjectId;

const AllCategories = async () => {
    try {
        let data = await CategoryModel.find()
        return {status:"success", data:data}
    }
    catch (e) {
        return {status:"fail", data:"Something Went Wrong"}
    }
}

const AllBrands = async () => {
    try {
        let data = await BrandModel.find()
        return {status:"success", data:data}
    }
    catch (e) {
        return {status:"fail", data:"Something Went Wrong"}
    }
}

const AllFeatures = async () => {
    try {
        let data = await FeaturesModel.find()
        return {status:"success", data:data}
    }
    catch (e) {
        return {status:"fail", data:"Something Went Wrong"}
    }
}

const SliderListService = async () => {
    try {
        let data = await ProductSliderModel.find();
        return {status:"success",data:data}
    }
    catch (e) {
        return {status:"fail",data:e}.toString()
    }
}

const ProductByRemark = async (req) => {
    try{
        let remark = req.params.remark
        let joinStage1 = {$lookup: {from: "Category", localField: "categoryID", foreignField: "_id", as: "category"}};
        let joinStage2 = {$lookup: {from: "Brand", localField: "brandID", foreignField: "_id", as: "brand"}};
        let matchStage = {$match: {remark:remark}}
        let projectionStage = {$project: {'category._id': 0, 'brand._id': 0, 'categoryID':0, 'brandID':0}}
        let unwindCategoryStage = {$unwind: "$category"}
        let unwindBrandStage = {$unwind: "$brand"}
        let data = await ProductModel.aggregate(
            [matchStage, joinStage1, joinStage2, unwindCategoryStage, unwindBrandStage, projectionStage]
        )
        return {status:"success", data:data}
    }
    catch (e) {
        return {status:"fail", data:e.toString()}
    }
}



const ProductByCategory = async (req)=>{
    try {
        let categoryID=new ObjectId(req.params.categoryID)
        let joinStage1={$lookup: {from: "Category", localField: "categoryID", foreignField: "_id", as: "category"}};
        let joinStage2={$lookup: {from: "Brand", localField: "brandID", foreignField: "_id", as: "brand"}};
        let matchStage= {$match: {categoryID:categoryID}}
        let projectionStage= {$project: {'category._id': 0, 'brand._id': 0, 'categoryID':0, 'brandID':0}}
        let unwindCategoryStage={$unwind: "$category"}
        let unwindBrandStage={$unwind: "$brand"}
        let data=await ProductModel.aggregate([matchStage, joinStage1, joinStage2, unwindCategoryStage, unwindBrandStage, projectionStage,])
        return {status:"success", data:data}
    }
    catch (e) {
        return {status:"fail", data:e.toString()}
    }
}


const ProductBYBrand = async (req)=>{
    try {
        let brandID = new ObjectId(req.params.brandID)
        let joinStage1 = {$lookup: {from: "Category", localField: "categoryID", foreignField: "_id", as: "category"}};
        let joinStage2 = {$lookup: {from: "Brand", localField: "brandID", foreignField: "_id", as: "brand"}};
        let matchStage = {$match: {brandID:brandID}}
        let projectionStage = {$project: {'category._id': 0, 'brand._id': 0, 'categoryID':0, 'brandID':0}}
        let unwindCategoryStage ={$unwind: "$category"}
        let unwindBrandStage = {$unwind: "$brand"}
        let data = await ProductModel.aggregate([matchStage, joinStage1, joinStage2, unwindCategoryStage, unwindBrandStage, projectionStage,])
        return {status:"success", data:data}
    }
    catch (e) {
        return {status:"fail", data:e.toString()}
    }
}


const ProductByCategoryLimit10 = async (req) => {
    try {
        let categoryID = new ObjectId(req.params.categoryID)
        let joinStage1 = {$lookup: {from: "Category", localField: "categoryID", foreignField: "_id", as: "category"}};
        let joinStage2 = {$lookup: {from: "Brand", localField: "brandID", foreignField: "_id", as: "brand"}};
        let matchStage = {$match: {categoryID:categoryID}}
        let limit = {$limit:10}
        let projectionStage = {$project: {'category._id': 0, 'brand._id': 0, 'categoryID':0, 'brandID':0}}
        let unwindCategoryStage ={$unwind: "$category"}
        let unwindBrandStage = {$unwind: "$brand"}
        let data = await ProductModel.aggregate([matchStage,limit, joinStage1, joinStage2, unwindCategoryStage, unwindBrandStage, projectionStage,])
        return {status:"success", data:data}
    }
    catch (e) {
        return {status:"fail", data:e.toString()}
    }
}


const ProductBySlider = async (req) => {
    try{
        let matchStage = {$match: {}}
        let limit = {$limit:5}
        let data = await ProductSliderModel.aggregate([matchStage,limit])
        return {status:"success", data:data}
    }
    catch (e) {
        return {status:"fail", data:e.toString()}
    }
}


const ProductByKeyword = async (req) => {
    try {
        let SearchRegex = {"$regex": req.params.keyword, "$options": "i"}
        let SearchParam = [{title: SearchRegex},{shortDes: SearchRegex}]
        let SearchQuery = {$or:SearchParam}
        let matchStage = {$match: SearchQuery};
        let joinStage1 = {$lookup: {from: "Category", localField: "categoryID", foreignField: "_id", as: "category"}};
        let joinStage2 = {$lookup: {from: "Brand", localField: "brandID", foreignField: "_id", as: "brand"}};
        let projectionStage =  {$project: {'category._id': 0, 'brand._id': 0, 'categoryID':0, 'brandID':0}}
        let unwindCategoryStage = {$unwind: "$category"}
        let unwindBrandStage = {$unwind: "$brand"}
        let data = await ProductModel.aggregate([matchStage, joinStage1, joinStage2, unwindCategoryStage, unwindBrandStage, projectionStage])
        return {status:"success", data:data}
    }
    catch (e) {
        return {status:"fail", data:e.toString()}
    }
}


const DetailsBYID = async (req) => {
    try {
        let ProductID = new ObjectId(req.params.id)

        let joinStage1 = {$lookup: {from: "Category", localField: "categoryID", foreignField: "_id", as: "category"}};
        let joinStage2 = {$lookup: {from: "Brand", localField: "brandID", foreignField: "_id", as: "brand"}};
        let joinStage3 = {$lookup: {from: "productdetails", localField: "_id", foreignField: "productID", as: "details"}};


        let projectionStage =  {$project: {'category._id': 0, 'brand._id': 0,'details._id':0,'details.productID':0}}
        let unwindCategoryStage = {$unwind: "$category"}
        let unwindBrandStage = {$unwind: "$brand"}
        let unwindDetailsStage = {$unwind: "$details"}

        let matchStage =   {$match: {_id:ProductID}};

        let data = await ProductModel.aggregate([
            matchStage,
            joinStage1,
            joinStage2,
            joinStage3,
            unwindCategoryStage,
            unwindBrandStage,
            unwindDetailsStage,
            projectionStage,
        ])
        return {status:"success", data:data}
    }
    catch (e) {
        return {status:"fail", data:e.toString()}
    }
}

const ListBySmilierService = async () => {

    try {
        let CategoryID=new ObjectId(req.params.CategoryID);
        let MatchStage={$match:{categoryID:CategoryID}}
        let limitStage={$limit:20}

        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data= await  ProductModel.aggregate([
            MatchStage, limitStage,JoinWithBrandStage,JoinWithCategoryStage,
            UnwindBrandStage,UnwindCategoryStage, ProjectionStage
        ])
        return {status:"success",data:data}

    }
    catch (e) {
        return {status:"fail",data:e}.toString()
    }

}

module.exports = {
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
};