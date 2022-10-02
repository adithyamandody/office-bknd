const express = require("express");
const router = express.Router();

const addDelivery = require("../controller/addDelivery");
const getDelivery = require("../controller/getDelivery");
router.post("/adddelivery", addDelivery.addDelivery);
router.get("/getdelivery", getDelivery.getDelivery);

module.exports = router;
