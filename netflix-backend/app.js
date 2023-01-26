const express = require("express");
require("dotenv").config();
const {connectToMongoDB} = require("./db")


const app = express();

const port = process.env.PORT || 8000

// Connecting to mongo DB
connectToMongoDB()



app.listen(port, () => {
  console.log(`Server is currently running on port ${port}`);
})