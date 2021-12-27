const mongoose = require("mongoose");

const { Schema } = mongoose;

const purchasecheme = new Schema({
  shop: String,
  price: Number,
  date: String,
});

module.exports = mongoose.model("purchase", purchasecheme);
