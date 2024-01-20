const { json } = require("express");
const Product = require("../models/Product");
const { verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();


//Create product
router.post("/", (req, res) => {
    let products = new Product({
        productname: req.body.productname,
        desc: req.body.desc,
        img1: req.body.img1,
        img2: req.body.img2,
        img3: req.body.img3,
        img4: req.body.img4,
        img5: req.body.img5,
        img6: req.body.img6,
        color: req.body.color,
        storage: req.body.storage,
        brand: req.body.brand,
        power: req.body.power,
        category: req.body.category,
        about: req.body.about,
        categories: req.body.categories,
        price: req.body.price,
        salePrice: req.body.salePrice,
    })
    products.save()
    res.send("Success")
})

// router.post("/", verifyTokenAndAdmin, async (req, res) => {
//     const newProduct = new Product(req.body)
//     try {
//         const savedProduct = await newProduct.save();
//         res.status(200).json(savedProduct); F
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })


//Update product
router.put("/:id", async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedProduct)
    } catch (err) {
        res.status(500).json(err)
    }
});


//Delete product
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    Product.findByIdAndDelete(id, (err, doc) => {
        if (!err) {
            res.send()
        } else {
            res.status(404).json({ message: err })
        }
    })
})

// router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
//     try {
//         await Product.findByIdAndDelete(req.params.id)
//         res.status(200), json("Product has been deleted ...")
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })


//Get product
router.get("/find/:id", async (req, res) => {
    const { id } = req.params;
    let result = await Product.findById(id)
    res.send(result)
})


//Get all products
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.categories;
    try {
        let products;
        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(5)
        } else if (qCategory) {
            products = await Product.find({
                categories: {
                    $in: [qCategory],
                },
            });
        } else {
            products = await Product.find()
        }
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router