const express = require('express');
const movieListModel = require('../models/movieList.model');
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

//Delete List
movieListRoute.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await MovieListModel.findByIdAndDelete(req.params.id);
      res.status(200).json("The movie list has been deleted");
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You are not allowed")
  }
})


//Get List
movieListRoute.get("/", verify, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];

  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await MovieListModel.aggregate([
          { $sample: { size: 10}},
          { $match: { type: typeQuery, genre: genreQuery}}
        ]);
      } else {
        list = await movieListModel.aggregate([
          { $sample: {size: 10}},
          { $match: {type: typeQuery}}
        ])
      }
    } else {
      list = await MovieListModel.aggregate([{ $sample: { size: 10}}])
    }
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json(error)
  }
})




module.exports = movieListRoute;