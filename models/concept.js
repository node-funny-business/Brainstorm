const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const titleOne = new Schema({

    topic: {
      name: String,
      type: String,
      concepts: {
        name: String,
        idea: {
          name: String,
          steps: []
        }
      }
    },
    userCreated: {
      type: Date,
      default: Date.now
    }
});


const Concept = mongoose.model("Concept", titleOne);

module.exports = Concept;
