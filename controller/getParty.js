const Party = require("../models/Party");

const getParty = (req, res) => {
  Party.find({}, function (err, party) {
    if (err) {
      console.log(err);
    } else {
      res.json(party.filter((party) => ({ _id: party._id, name: party.name })));
    }
  });
};
const getPartyById = async (req, res) => {
  try {
    const party = await Party.findById(req.params.id);
    res.status(200).json(party);
    console.log(party);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getParty, getPartyById };
