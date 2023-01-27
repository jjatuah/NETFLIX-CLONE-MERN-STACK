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


module.exports = movieRoute