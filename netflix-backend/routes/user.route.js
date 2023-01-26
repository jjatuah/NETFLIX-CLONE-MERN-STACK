const express = require('express');
const UserModel = require("../models/user.model");
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');
require('dotenv').config();


const userRoute = express.Router();


module.exports = userRoute