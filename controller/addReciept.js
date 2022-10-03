const { express } = require('express');
const Reciept = require('../models/Reciept');

const addReciept = (req, res) => {
  let reciept = new Reciept({
    name: req.body.name,
    date: req.body.date,

    discount: req.body.discount,

    collectionBoy: req.body.collectionBoy,
    openingBalance: req.body.openingBalance,
    closingBalance: req.body.closingBalance,

    amount: req.body.amount,
    modeoftransaction: req.body.modeoftransaction,
    transactionno: req.body.transactionno,
    currentStock: req.body.currentStock,
  });

  reciept
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

module.exports = { addReciept };
