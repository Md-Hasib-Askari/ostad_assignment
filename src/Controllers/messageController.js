exports.create = async (req, res) => {
    res.status(201).json({"status":"success", "data": "Message Created Successfully"});
};


exports.read = async (req, res) => {
    res.status(200).json({"status":"success", "data": "Message Data Found!"});
};


exports.delete = async (req, res) => {
    res.status(200).json({"status":"success", "data": "Message Deleted Successfully"});
};


exports.update = async (req, res) => {
    res.status(200).json({"status":"success", "data": "Message Updated Successfully"});
};