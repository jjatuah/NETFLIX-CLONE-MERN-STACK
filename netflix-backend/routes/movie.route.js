const express = require('express');
const MovieModel = require("../models/movie.model");
const verify = require("../verifyToken");


const movieRoute = express.Router();

module.exports = movieRoute