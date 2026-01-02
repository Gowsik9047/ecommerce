// route to get products and product by id
// import express
// import getProducts and getProductsId controller
// create router
// define route to get products and product by id
// export router

const express = require('express');
const { getProducts, getProductsId } = require('../controllers/productController');
const router = express.Router();

router.route('/products').get(getProducts);
router.route('/products/:id').get(getProductsId);

module.exports = router;