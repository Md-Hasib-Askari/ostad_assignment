exports.create = async (req, res) => {
    res.status(201).json({"status":"success", "data": "Portfolio Created Successfully"});
};


exports.read = async (req, res) => {
    res.status(200).json({"status":"success", "data": "Portfolio Data Found!"});
};


exports.delete = async (req, res) => {
    res.status(200).json({"status":"success", "data": "Portfolio Deleted Successfully"});
};


exports.update = async (req, res) => {
    res.status(200).json({"status":"success", "data": "Portfolio Updated Successfully"});
};