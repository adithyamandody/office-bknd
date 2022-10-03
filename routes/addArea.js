const express = require('express');
const router = express.Router();

const addArea = require('../controller/addArea');
const getArea = require('../controller/getArea');
router.post('/addarea', addArea.addArea);
router.get('/getarea', getArea.getArea);

module.exports = router;
