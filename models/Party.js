const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PartySchema = new Schema(
  {
    img: {
      data: Buffer,
      contentType: String,
    },
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
    closingBalance: {
      type: String,
    },
    openingBalance: {
      type: Number,
    },
    openingStock: {
      type: Number,
    },
    closingStock: {
      type: Number,
    },
    Depocylamo: {
      type: Number,
    },
    currentStock: {
      type: String,
    },
    Product: {
      type: String,
    },
  },
  { timestamps: true }
);

const Party = mongoose.model('Party', PartySchema);
module.exports = Party;
