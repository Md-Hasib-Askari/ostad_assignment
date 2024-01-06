const salesModel = require('../Models/SalesModel');

exports.getTotalRevenue = async (req, res) => {
    try {
        const totalRevenue = await salesModel.aggregate([
            {
                $group: {
                    _id: null,
                    totalRevenue: {$sum: {$multiply: ["$price", "$quantity"]}}
                }
            }
        ]);
        res.json(totalRevenue);
    } catch (e) {
        res.json(e.toString())
    }
}

exports.getQuantityByProduct = async (req, res) => {
    try {
        const quantityByProduct = await salesModel.aggregate([
            {
                $group: {
                    _id: "$product",
                    quantity: {$sum: "$quantity"}
                }
            }
        ]);
        res.json(quantityByProduct);
    } catch (e) {
        res.json(e.toString())
    }
}

exports.getTopProducts = async (req, res) => {
    try {
        const topProducts = await salesModel.aggregate([
            {
                $group: {
                    _id: "$product",
                    quantity: {$sum: {$multiply: ["$price", "$quantity"]}}
                }
            },
            { $sort: {quantity: -1} },
            { $limit: 5 }
        ]);
        res.json(topProducts);
    } catch (e) {
        res.json(e.toString())
    }
}

exports.getAveragePrice = async (req, res) => {
    try {
        const averagePrice = await salesModel.aggregate([
            {
                $group: {
                    _id: null,
                    totalCount: {
                        $sum: '$quantity'
                    },
                    totalPrice: {
                        $sum: '$price'
                    },
                    total: {
                        $sum: { $multiply: ['$quantity', '$price'] }
                    }
                }
            }, {
                $project: {
                    average: {
                        $divide: [
                            {
                                $toDouble: '$total'
                            }, {
                                $toDouble: '$totalCount'
                            }
                        ]
                    }
                }
            }
        ]);
        res.json(averagePrice);
    } catch (e) {
        res.json(e.toString())
    }

}

exports.getRevenueByMonth = async (req, res) => {
    try {
        const revenueByMonth = await salesModel.aggregate([
            {
                $group: {
                    _id: {
                        year: {$year: "$date"},
                        month: {$month: "$date"}
                    },
                    totalRevenue: {
                        $sum: {$multiply: ["$quantity", "$price"]},
                    },
                },
            },
            {
                $project: {
                    _id: 0,
                    year: "$_id.year",
                    month: "$_id.month",
                    totalRevenue: 1,
                },
            },
            {
                $sort: {
                    year: 1,
                    month: 1
                },
            },
        ]);
        res.json(revenueByMonth);
    } catch (e) {
        res.json(e.toString())
    }

}

exports.getHighestQuantitySold = async (req, res) => {
    try {
        const highestQuantitySold = await salesModel.aggregate([
            {
                $group: {
                    _id: {
                        date: { $dateToString: { format: "%d-%m-%Y", date: "$date" } },
                        product: "$product"
                    },
                    totalQuantity: { $sum: "$quantity" }
                }
            },
            {
                $sort: {
                    "totalQuantity": -1
                }
            },
            {
                $limit: 1
            },
            {
                $project: {
                    _id: 0,
                    product: "$_id.product",
                    totalQuantity: 1
                }
            }
        ]);
        res.json(highestQuantitySold);
    } catch (e) {
        res.json(e.toString())
    }
}

exports.getDepartmentSalaryExpense = async (req, res) => {
    try {
        const departmentSalaryExpense = await salesModel.aggregate([
            {
                $group: {
                    _id: "$department",
                    totalSalaryExpense: { $sum: { $multiply: ["$quantity", "$price"] } }
                }
            },
            {
                $sort: {
                    totalSalaryExpense: -1
                }
            },
            {
                $project: {
                    _id: 0,
                    department: "$_id",
                    totalSalaryExpense: 1
                }
            }
        ]);
        res.json(departmentSalaryExpense);
    } catch (e) {
        res.json(e.toString())
    }
}