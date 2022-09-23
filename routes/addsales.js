const express = require('express');
const router = express.Router();

const addSale = require('../controller/addSale');
router.post('/addsale', addSale.addSale);
module.exports = router;
