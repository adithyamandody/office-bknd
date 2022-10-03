const Area = require('../models/Area');

const getArea = (req, res) => {
  Area.find({}, function (err, area) {
    if (err) {
      console.log(err);
    } else {
      res.json(area);
    }
  });
};

module.exports = { getArea };
