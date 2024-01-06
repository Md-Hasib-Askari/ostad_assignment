/*
* Add all your Routes here and export them
*/

const router = require('express').Router();
const SalesController = require("../Controllers/SalesController");

router.get('/sales/total-revenue', SalesController.getTotalRevenue);
router.get('/sales/quantity-by-product', SalesController.getQuantityByProduct);
router.get('/sales/top-products', SalesController.getTopProducts);
router.get('/sales/average-price', SalesController.getAveragePrice);
router.get('/sales/revenue-by-month', SalesController.getRevenueByMonth);
router.get('/sales/highest-quantity-sold', SalesController.getHighestQuantitySold);
router.get('/sales/department-salary-expense', SalesController.getDepartmentSalaryExpense);


module.exports=router;