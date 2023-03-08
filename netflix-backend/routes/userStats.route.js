const express = require('express');
const UserModel = require("../models/user.model");
const verify = require("../verifyToken");


const userStatsRoute = express.Router();


// get user stats (for admin only)
userStatsRoute.get("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear() - 1);

    const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   
    try {
      const data = await UserModel.aggregate([
        {
          $project: {
            month: {$month: "$createdAt"},
          }, 
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1},
          },
        },
      ])
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You're not allowed to see all users")
  }
})


module.exports = userStatsRoute