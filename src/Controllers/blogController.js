exports.create = async (req, res) => {
    res.status(201).json({"status":"success", "data": "Blog Created Successfully"});
};


exports.read = async (req, res) => {
    res.status(200).json({"status":"success", "data": "Blog Data Found!"});
};


exports.delete = async (req, res) => {
    res.status(200).json({"status":"success", "data": "Blog Deleted Successfully"});
};


exports.update = async (req, res) => {
    res.status(200).json({"status":"success", "data": "Blog Updated Successfully"});
};