const mongoose = require("mongoose");

const Product = mongoose.Schema({
  name: String,
  count: String,
  price: String,
  image: Array,
});

module.exports = mongoose.model("Product", Product);
