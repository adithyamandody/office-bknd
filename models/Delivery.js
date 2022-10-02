const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeliverySchema = new Schema(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

const Delivery = mongoose.model("Delivery", DeliverySchema);
module.exports = Delivery;
