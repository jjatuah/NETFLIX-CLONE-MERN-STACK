const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const MovieListId = Schema.ObjectId; 

const MovieListSchema = new Schema (
    {
      id: MovieListId,

      title: {
        type: String,
        required: true,
        unique: true
      },

      type: {
        type: String
      },

      genre: {
        type: String
      },

      content: {
        type: Array
      }
  },
  { timestamps: true }
);


module.export = mongoose.model("MovieList", MovieListSchema)
