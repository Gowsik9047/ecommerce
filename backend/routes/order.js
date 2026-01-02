// route to post order
// import express
// import postOrder controller
// create router
// define route to post order
// export router  

const express = require('express'); 
const { postOrder } = require('../controllers/orderController');
const router = express.Router();

router.route('/orders').post(postOrder);

module.exports = router;