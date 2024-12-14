import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    },
}, {
    timestamps: true // createAt, updateAt
});

const Product = mongoose.model('Product', productSchema); // kata 'Product' bakal di convert menjadi 'products' di mongoose 

export default Product;