import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("error in fetching products: ", error.messege);
    res.status(500).json({ success: false, messege: "Server Error" });
  }
};

export const createProducts = async (req, res) => {
  const product = req.body; // data yang dikirim user

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, messege: "Please Privide All fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("error in create product: ", error.messege);
    res.status(500).json({ success: false, messege: "Server Error" });
  }
};

export const updateProducts = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, messege: "Invalid Product Id" });
  }

  try {
    const updateProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updateProduct });
  } catch (error) {
    res.status(500).json({ success: false, messege: "Server Error" });
  }
};

export const deleteProducts = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, messege: "Invalid Product Id" });
  }

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, messege: "Product deleted" });
  } catch (error) {
    console.log("error in deleting products: ", error.messege);
    res.status(500).json({ success: false, messege: "Server Error" });
  }
};
