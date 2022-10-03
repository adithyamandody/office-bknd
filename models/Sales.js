const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saleSchema = new Schema(
  {
    name: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    full: {
      type: Number,
    },
    empty: {
      type: Number,
    },
    mrp: {
      type: Number,
    },
    discount: {
      type: Number,
    },

    totalDiscount: {
      type: Number,
    },
    area: {
      type: String,
    },

    deliveryBoy: {
      type: String,
    },

    openingBalance: {
      type: Number,
    },
    closingBalance: {
      type: Number,
    },
    currentStock: {
      type: String,
    },

    openingOutstanding: {
      type: String,
    },
    totalSale: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Sale = mongoose.model('Sale', saleSchema);
module.exports = Sale;
