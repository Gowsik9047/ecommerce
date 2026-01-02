// route to get products and product by id
// import express
// import getProducts and getProductsId controller
// create router
// define route to get products and product by id
// export router

const express = require('express');
const { getProducts, getProductsId, getProductsCategory } = require('../controllers/productController');
const router = express.Router();

router.route('/products').get(getProducts);
router.route('/products/:id').get(getProductsId);
router.route('/products/category/:category').get(getProductsCategory);

module.exports = router;