const WorkModel = require('../Models/WorksModel');

// Create a new work
exports.createWork = async (req, res) => {
    const email = req.cookies['email'];
    const reqBody = req.body;
    reqBody['email'] = email;
    try {
        let data = await WorkModel.create(reqBody);
        res.status(200).json({status:"success", data:data});
    } catch (err) {
        res.status(400).json({status:"fail", data:err.toString()});
    }
};

// Read all works
exports.getAllWorks = async (req, res) => {
    try {
        let data = await WorkModel.find();
        res.status(200).json({status:"success", data:data});
    } catch (err) {
        res.status(400).json({status:"fail", data:err.toString()});
    }
};

// Read a single work by ID
exports.getWorkByStatus = async (req, res) => {
    let status= req.params.status;
    let email = req.cookies['email'];
    try {
        let data = await WorkModel.aggregate([
            {$match:{status:status,email:email}},
            {$project:{
                    _id:1,title:1,description:1, status:1,
                    createdDate:{
                        $dateToString:{
                            date:"$createdDate",
                            format:"%d-%m-%Y"
                        }
                    }
                }}
        ]);
        res.status(200).json({status:"success", data:data})
    } catch (err) {
        res.status(400).json({status:"fail", data:err.toString()})
    }
};

// Update a work by status
exports.updateWork = async (req, res) => {
    let id= req.params.id;
    let status= req.params.status;
    let Query={_id:id};
    let reqBody={status:status}
    try {
        let data = await WorkModel.updateOne(Query,reqBody);
        res.status(200).json({status:"success", data:data});
    } catch (err) {
        res.status(400).json({status:"fail", data:err.toString()});
    }

};

// Delete a work by ID
exports.deleteWork = async (req, res) => {
    let id = req.params.id;
    let Query = {_id:id};
    try {
        let data = await WorkModel.findOneAndRemove(Query);
        res.status(200).json({status:"success", data:data});
    } catch (err) {
        res.status(400).json({status:"fail", data:err.toString()});
    }
};