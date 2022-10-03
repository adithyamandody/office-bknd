const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recieptSchema = new Schema(
  {
    name: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    amount: {
      type: Number,
    },
    modeoftransaction: {
      type: Number,
    },
    transactionno: {
      type: String,
    },

    collectionBoy: {
      type: String,
    },
    openingBalance: {
      type: Number,
    },
    closingBalance: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Reciept = mongoose.model('Reciept', recieptSchema);
module.exports = Reciept;
