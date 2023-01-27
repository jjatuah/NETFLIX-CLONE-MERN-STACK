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
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You are not allowed")
  }
})


module.exports = movieRoute