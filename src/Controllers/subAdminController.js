exports.create = async (req, res) => {
    res.status(200).json({
        status: "success",
        data: "Sub Admin created successfully!",
    });
};


exports.read = async (req, res) => {
    res.status(200).json({
        status: "success",
        data: "Sub Admin retrieved successfully!",
    });
};


exports.delete = async (req, res) => {
    res.status(200).json({
        status: "success",
        data: "Sub Admin deleted successfully!",
    });
};


exports.update = async (req, res) => {
    res.status(200).json({
        status: "success",
        data: "Sub Admin updated successfully!",
    });
};
