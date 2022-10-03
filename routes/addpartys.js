const express = require('express');
const router = express.Router();

const addParty = require('../controller/addParty');
const getParty = require('../controller/getParty');

router.post('/addparty', addParty.addParty);
router.get('/getparty', getParty.getParty);
router.get('/getpartybyid/:id', getParty.getPartyById);

module.exports = router;
