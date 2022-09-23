const { express } = require('express');
const Sale = require('../models/Sales');

const addSale = (req, res) => {
  let sale = new Sale({
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
    area: req.body.area,
    discount: req.body.discount,
    proof: req.body.proof,
    idno: req.body.idno,
    deliveryBoy: req.body.deliveryBoy,
    collectionBoy: req.body.collectionBoy,
    openingBalance: req.body.openingBalance,
    Depocylamo: req.body.Depocylamo,
    currentStock: req.body.currentStock,
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
