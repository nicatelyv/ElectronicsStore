const router = require("express").Router();
const User = require("../models/User")
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken")

// Register
router.post("/register", async (req, res) => {
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString(),
    })
    try {
        const savedUser = await newUser.save();
        res.status(201).json({ username: savedUser.username, firstName: savedUser.firstName, lastName: savedUser.lastName, email: savedUser.email });
    } catch (err) {
        res.status(500).json(err);
    }
});

//Login
router.post("/login", async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
        return res.status(401).json({ message: "User not found" })
    }
    const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SEC
    );
    const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (Originalpassword !== req.body.password) {
        return res.status(401).json({ message: "Wrong password !" });
    }

    const accessToken = jwt.sign(
        {
            id: user._id,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
        { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;

    return res.status(200).json({ email: user.email, firstName: user.firstName, lastName: user.lastName, username: user.username, ...others, accessToken , isAdmin : user.isAdmin })
})

module.exports = router  