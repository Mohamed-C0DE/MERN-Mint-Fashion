const mongoose = require("mongoose");
const Products = require("./schema");

mongoose.connect(
  "mongodb+srv://MintFashion:mYqcRNriqq9i1irC@cluster0.9uysroj.mongodb.net/Mint?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

const seedProducts = [
  {
    name: "T-Shirt",
    price: 9.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    rating: 4.5,
    bestSeller: true,
  },
];

const seedDB = async () => {
  await Products.deleteMany({});
  await Products.insertMany(seedProducts);
};

seedDB().then(() => {
  mongoose.connection.close();
});
