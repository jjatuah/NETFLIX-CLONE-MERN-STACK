const express = require('express');
const UserModel = require("../models/user.model");
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');
require('dotenv').config();


const authRoute = express.Router();

//Sign-up
authRoute.post("/signup", async (req, res) => {
  try {
    const newUser = {
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
    }
  
    await UserModel.create(newUser)
    .then((user) => {
      return res.json({ status: true, user }).status(201)
    }).catch((err)=> {
      return res.json({ status: false, message: err }).status(403)
    })
  } catch (error) {
    console.log(error);
  }
})

//Sign-in
authRoute.post("/signin", async (req, res) => {
  try {
    const user = await UserModel.findOne({email: req.body.email});

    !user && res.status(401).json("Wrong email provided");

    const originalPassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY).toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password  && res.status(401).json("Wrong password provided")

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin
      }, process.env.SECRET_KEY, {expiresIn: "1h"}
    );

    console.log(accessToken);

    const {password, ...info} = user._doc

    res.status(200).json({info, accessToken})
    
  } catch (error) {
    res.status(500).json(error);
  } 
})


module.exports = authRoute;