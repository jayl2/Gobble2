const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Review = new Schema(
  {
    RestaurantName: { type: String, required: true },
    name: { type: String, required: true },
    review: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("review", Review);
