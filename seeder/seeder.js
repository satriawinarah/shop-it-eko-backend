import mongoose from "mongoose";
import products from "./data.js";
import Product from "../models/product.js";

const seedProducts = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ekofirlianto:Firlianto11@ekoshopitv2.vsplvkq.mongodb.net/shopit-v2?retryWrites=true&w=majority&appName=ekoshopitv2"
    );
    // await mongoose.connect("mongodb://127.0.0.1:27017/shopit-v2");

    await Product.deleteMany();
    console.log("Products are deleted");

    await Product.insertMany(products);
    console.log("Products are added");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
