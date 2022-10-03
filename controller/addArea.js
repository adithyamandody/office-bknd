const { express } = require('express');
const Area = require('../models/Area');

const addArea = (req, res) => {
  let area = new Area({
    name: req.body.name,
  });

  //   console.log(Area.name);

  area
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

module.exports = { addArea };
