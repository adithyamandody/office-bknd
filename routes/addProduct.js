const express = require('express');
const router = express.Router();

const Product = require('../controller/Productcntrl');
router.post('/addproduct', Product.addProduct);
router.get('/getproduct', Product.getProduct);

module.exports = router;
