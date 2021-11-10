const express = require("express");
const route = express.Router();
const Product = require("../model/product");

route.post("/product", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    count: req.body.count,
    price: req.body.price,
    image: req.body.image,
  });
  try {
    const result = await product.save();
    res.json(result);
  } catch (err) {
    res.json({ message: err });
  }
});

route.get("/product", async (req, res) => {
  try {
    const result = await Product.find();
    res.json(result);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = route;
