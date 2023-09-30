exports.create = async (req, res) => {
    res.status(200).json({
        status: "success",
        data: "Post created successfully!",
    });
};


exports.read = async (req, res) => {
    res.status(200).json({
        status: "success",
        data: "Post retrieved successfully!",
    });
};


exports.delete = async (req, res) => {
    res.status(200).json({
        status: "success",
        data: "Post deleted successfully!",
    });
};


exports.update = async (req, res) => {
    res.status(200).json({
        status: "success",
        data: "Post updated successfully!",
    });
};
