const mongoose = require("mongoose");
require("dotenv").config();


const mongoConnectionUrl = process.env.MONGO_DB_URL

function connectToMongoDB() {
  mongoose.connect(mongoConnectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(`Error connecting to MongoDB, ${err}`));
}

module.exports = { connectToMongoDB };