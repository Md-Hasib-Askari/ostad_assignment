exports.create = async (req, res) => {
    res.status(200).json({
        status: "success",
        data: "User created successfully!",
    });
};


exports.read = async (req, res) => {
    res.status(200).json({
        status: "success",
        data: "User retrieved successfully!",
    });
};


exports.delete = async (req, res) => {
    res.status(200).json({
        status: "success",
        data: "User deleted successfully!",
    });
};


exports.update = async (req, res) => {
    res.status(200).json({
        status: "success",
        data: "User updated successfully!",
    });
};