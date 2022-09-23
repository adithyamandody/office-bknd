const express = require('express');
const router = express.Router();

const addParty = require('../controller/addParty');
router.post('/addparty', addParty.addParty);
module.exports = router;
