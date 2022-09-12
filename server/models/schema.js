const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  bestSeller: {
    type: Boolean,
    required: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
