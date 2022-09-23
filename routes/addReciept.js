const express = require('express');
const router = express.Router();

const addReciept = require('../controller/addReciept');
router.post('/addReciept', addReciept.addReciept);
module.exports = router;
