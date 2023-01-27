const express = require('express');
const MovieModel = require("../models/movie.model");
const verify = require("../verifyToken");


const movieRoute = express.Router();


//Create Movie
movieRoute.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new MovieModel(req.body);

    try {
      const savedMovie = await newMovie.save()
      res.status(201).json(savedMovie)
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You are not allowed")
  }
})

//Update Movie
movieRoute.put("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedMovie = await MovieModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body
        },
        {new: true}
        )
      res.status(200).json(updatedMovie);
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You are not allowed")
  }
})


//Delete Movie
movieRoute.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await MovieModel.findByIdAndDelete(req.params.id);
      res.status(200).json("The movie has been deleted");
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You are not allowed")
  }
})


//Get Movie by id
movieRoute.get("/find/:id", verify, async (req, res) => {
  try {
    const movie = await MovieModel.findById(req.params.id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({message:"movie not found", error})
  }
})


//Get random movie 
movieRoute.get("/random", verify, async (req, res) => {
  const type = req.query.type;
  let movie;
  try {
    if (type === "series") {
      movie = await MovieModel.aggregate([
        {$match: {isSeries: true}},
        {$sample: {size: 1}},
      ]);
    } else {
      movie = await MovieModel.aggregate([
        {$match: {isSeries: false}},
        {$sample: {size: 1}},
      ]);
    }
    
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({message:"movie not found", error})
  }
})


//Get all movies (admin only)
movieRoute.get("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movies = await MovieModel.find();
      res.status(200).json(movies.reverse());
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You are not allowed")
  }
})


module.exports = movieRoute