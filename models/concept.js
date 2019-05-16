const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const titleOne = new Schema({

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
