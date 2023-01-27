const express = require('express');
const UserModel = require("../models/user.model");
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');
const verify = require("../verifyToken");
require('dotenv').config();


const userRoute = express.Router();

//Update
userRoute.put("/:id", verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }

    try {
      const updatedUser = await UserModel.findByIdAndUpdate(
        req.params.id,
        {$set: req.body}, {new:true}
      );

      res.status(200).json(updatedUser)
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You can only update your account")
  }
})


//Delete
userRoute.delete("/:id", verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      await UserModel.findByIdAndDelete(req.params.id)
      res.status(200).json("Account deleted successfully")
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You can only delete your account")
  }
})


//get user by id
userRoute.get("/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id)
    const {password, ...info} = user._doc
    res.status(200).json(info)
  } catch (error) {
    res.status(500).json(error)
  }
})


//get all users (for admin only)
userRoute.get("/", verify, async (req, res) => {
  const query = req.query.new;

  if (req.user.isAdmin) {
    try {
      const users = query ? await UserModel.find().sort({_id: -1}).limit(10) : await UserModel.find();
      res.status(200).json(users)
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You're not allowed to see all users")
  }
})


module.exports = userRoute