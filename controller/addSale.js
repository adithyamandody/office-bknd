const { express } = require('express');
const Sale = require('../models/Sales');

const addSale = (req, res) => {
  let sale = new Sale({
    name: req.body.name,
    date: req.body.date,
    full: req.body.full,
    empty: req.body.mt,
    mrp: req.body.mrp,

    area: req.body.area,
    discount: req.body.discount,
    totalDiscount: req.body.totalDiscount,

    deliveryBoy: req.body.deliveryBoy,

    openingBalance: req.body.openingBalance,
    closingBalance: req.body.closingBalance,
    openingOutstanding: req.body.openingOutstanding,

    currentStock: req.body.currentStock,
    totalSale: req.body.totalSale,
  });

  sale
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

module.exports = { addSale };
