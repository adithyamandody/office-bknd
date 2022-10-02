const { express } = require('express');
const Delivery = require('../models/Delivery');

const addDelivery = (req, res) => {
  let delivery = new Delivery({
    name: req.body.name,
  });

  //   console.log(delivery.name);

  delivery
    .save()
    .then((user) => {
      res.json({
        message: 'jelole success',
      });
    })
    .catch((error) => {
      console.log(error);
      res.json({
        message: 'error',
      });
    });
};

module.exports = { addDelivery };