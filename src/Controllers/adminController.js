exports.create = async (req, res) => {
    res.status(200).json({
        status: "success",
        data: "Admin created successfully!",
    });
};


exports.read = async (req, res) => {
    res.status(200).json({
        status: "success",
        data: "Admin retrieved successfully!",
    });
};


exports.delete = async (req, res) => {
    res.status(200).json({
        status: "success",
        data: "Admin deleted successfully!",
    });
};


exports.update = async (req, res) => {
    res.status(200).json({
        status: "success",
        data: "Admin updated successfully!",
    });
};
