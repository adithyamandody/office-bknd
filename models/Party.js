const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PartySchema = new Schema(
  {
    name: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
    address: {
      type: String,
    },
    area: {
      type: String,
    },
    discount: {
      type: Number,
    },
    proof: {
      type: String,
    },
    idno: {
      type: String,
    },
    deliveryBoy: {
      type: String,
    },
    collectionBoy: {
      type: String,
    },
    collectionBoy: {
      type: String,
    },
    openingBalance: {
      type: Number,
    },
    Depocylamo: {
      type: Number,
    },
    currentStock: {
      type: String,
    },
  },
  { timestamps: true }
);

const Party = mongoose.model('Party', PartySchema);
module.exports = Party;
