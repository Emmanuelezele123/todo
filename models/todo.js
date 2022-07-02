const mongoose = require("mongoose");


const Todo = new mongoose.Schema(
  {
      //title, description, timestamp.
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,
    },
    description:{
      type:String,
      required:true,
      trim:true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", Todo);