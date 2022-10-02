const Delivery = require("../models/Delivery");

const getDelivery = (req, res) => {
  Delivery.find({}, function (err, delivery) {
    if (err) {
      console.log(err);
    } else {
      res.json(delivery);
    }
  });
};

module.exports = { getDelivery };
