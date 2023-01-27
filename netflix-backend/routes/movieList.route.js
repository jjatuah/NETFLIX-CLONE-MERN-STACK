const express = require('express');
const MovieListModel = require("../models/movieList.model");
const verify = require("../verifyToken");


const movieListRoute = express.Router();


module.exports = movieListRoute;