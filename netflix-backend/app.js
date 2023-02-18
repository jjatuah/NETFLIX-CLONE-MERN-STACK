const express = require("express");
require("dotenv").config();
const {connectToMongoDB} = require("./db")
const authRoute = require("./routes/authentication.route");
const userRoute = require("./routes/user.route");
const movieRoute = require("./routes/movie.route");
const movieListRoute = require("./routes/movieList.route");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 8000 

const corsOrigin ={
  origin:'http://localhost:3000', //or whatever port your frontend is using
  credentials:true,            
  optionSuccessStatus:200
}
app.use(cors(corsOrigin));


// Connecting to mongo DB
connectToMongoDB()

//Connecting all middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false}));


// app.get("/", (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*")
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Access-Control-Max-Age", "1800");
//   res.setHeader("Access-Control-Allow-Headers", "content-type");
//   res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );  
//  })

app.get("/bb", (req, res) => {
 return res.json("Home Route") 
})


//Connecting all routes
app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/movie", movieRoute)
app.use("/api/movielist", movieListRoute)



app.listen(port, () => {
  console.log(`Server is currently running on port ${port}`);
})