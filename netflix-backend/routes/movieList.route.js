const express = require('express');
const MovieListModel = require("../models/movieList.model");
const verify = require("../verifyToken");


const movieListRoute = express.Router();

//Create List
movieListRoute.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovieList = new MovieListModel(req.body);

    try {
      const savedMovieList = await newMovieList.save();
      res.status(201).json(savedMovieList)
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You are not allowed")
  }
})


//Update List
movieListRoute.put("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedMovieList = await MovieListModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body
        },
        {new: true}
        )
      res.status(200).json(updatedMovieList);
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You are not allowed")
  }
})




module.exports = movieListRoute;