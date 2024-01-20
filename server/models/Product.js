const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    productname: { type: String },
    desc: { type: String },
    img1: { type: String },
    img2: { type: String },
    img3: { type: String },
    img4: { type: String },
    img5: { type: String },
    img6: { type: String },
    img7: { type: String },
    img8: { type: String },
    img9: { type: String },
    color: { type: String },
    storage: { type: String },
    ram: { type: String },
    brand: { type: String },
    stock: { type: String },
    power: { type: String },
    categories: { type: Array },
    about: { type: String },
    category: { type: String },
    price: { type: Number },
    salePrice: { type: Number },
},
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);