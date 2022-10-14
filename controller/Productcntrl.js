const { express } = require('express');
const Product = require('../models/Product');

const addProduct = (req, res) => {
  let product = new Product({
    name: req.body.name,
    mrp: req.body.mrp,
  });

  //   console.log(delivery.name);

  product
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

const getProduct = (req, res) => {
  Product.find({}, function (err, product) {
    if (err) {
      console.log(err);
    } else {
      res.json(product);
    }
  });
};

module.exports = { addProduct, getProduct };
