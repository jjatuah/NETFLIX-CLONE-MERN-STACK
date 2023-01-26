const express = require("express");
require("dotenv").config();
const {connectToMongoDB} = require("./db")
const authRoute = require("./routes/authentication.route");
const userRoute = require("./routes/user.route");
const app = express();

const port = process.env.PORT || 8000

// Connecting to mongo DB
connectToMongoDB()

//Connecting all middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false}));

//Connecting all routes
app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)


app.listen(port, () => {
  console.log(`Server is currently running on port ${port}`);
})