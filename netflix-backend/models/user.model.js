const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UserId = Schema.ObjectId; 

const UserSchema = new Schema (
    {
      id: UserId,

      username: {
        type: String,
        required: true,
        unique: true
      },

      email: {
        type: String,
        required: true,
        unique: true
      },

      password: {
        type: String,
        required: true
      },

      profilePic: {
        type: String,
        default: "",
      },

      isAdmin: {
        type: Boolean,
        default: false
      }
  },
  { timestamps: true }
);


module.export = mongoose.model("Users", UserSchema)
