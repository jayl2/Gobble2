const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Restaurant = new Schema(
  {
    name: { type: String, required: true },
    foodType: { type: String, required: true },
    city: { type: String, required: true },
    town: { type: String, requred: true },
    description: { type: String, requred: true },
    image: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("restaurants", Restaurant);
