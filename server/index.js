const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;
const cors = require("cors");

const ProductsModel = require("./models/schema");

// middleware
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://MintFashion:mYqcRNriqq9i1irC@cluster0.9uysroj.mongodb.net/Mint?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", async (req, res) => {
  ProductsModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log("Server running on PORT 8000");
});
