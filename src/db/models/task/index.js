const mongoose = require("mongoose");

const { Schema } = mongoose;

const purchasecheme = new Schema({
  text: String,
  text2: Number,
  date: String,
});

module.exports = mongoose.model("purchase", purchasecheme);
