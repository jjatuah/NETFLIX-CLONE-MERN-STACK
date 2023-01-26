const express = require('express');
const UserModel = require("../models/user.model");
const CryptoJS = require("crypto-js");
// const jwt = require('jsonwebtoken');
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




module.exports = authRoute;