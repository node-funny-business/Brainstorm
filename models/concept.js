const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const titleOne = new Schema({

  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  passwordConf: {
    type: String,
    required: true,
  },
  concept: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now

  }

});


const Concept = mongoose.model("Concept", titleOne);

module.exports = Concept;
