const express = require('express');
const router = express.Router();

const Product = require('../controller/Productcntrl');
// const getDelivery = require('../controller/getDelivery');
router.post('/addproduct', Product.addProduct);
// router.get('/getdelivery', getDelivery.getDelivery);

module.exports = router;
