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
  {
    name: "Crew-Neck Sweatshirt",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1611258266547-1afeb6a56c8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    rating: 4.8,
    bestSeller: true,
  },
  {
    name: "Ripped Jeans",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1516271099866-de31ba93ee4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4,
    bestSeller: true,
  },
  {
    name: "Blazer",
    price: 54.99,
    image:
      "https://images.unsplash.com/photo-1592878849122-facb97520f9e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGNsb3RoaW5nfGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.4,
    bestSeller: false,
  },
  {
    name: "Suit",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VpdHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    rating: 4.4,
    bestSeller: false,
  },
  {
    name: "Athletic Shorts",
    price: 12.99,
    image:
      "https://i.pinimg.com/236x/93/60/8e/93608e48e6a90f815a1d99420f0df00b.jpg",
    rating: 4.6,
    bestSeller: false,
  },
  {
    name: "Slim-Fit Jeans",
    price: 30,
    image:
      "https://images.pexels.com/photos/4452520/pexels-photo-4452520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    rating: 4.9,
    bestSeller: true,
  },
  {
    name: "Denim Jacket",
    price: 29.99,
    image:
      "https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    rating: 4.2,
    bestSeller: false,
  },
  {
    name: "Overcoat",
    price: 65,
    image:
      "https://images.pexels.com/photos/7083673/pexels-photo-7083673.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    rating: 4,
    bestSeller: false,
  },
  {
    name: "Running Shoes",
    price: 24.99,
    image:
      "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    rating: 3.8,
    bestSeller: false,
  },
];

const seedDB = async () => {
  await Products.deleteMany({});
  await Products.insertMany(seedProducts);
};

seedDB().then(() => {
  mongoose.connection.close();
});
