const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const titleOne = new Schema({
  topic: {
    name: String,
    type: String,
    concepts: {
      type: Map,
      of: {
        name: String,
        idea: {
          type: Map,
          of: {
            name: String,
          steps: []
        }
          }
      }
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});
// might have to use new Map

const Concept = mongoose.model("Concept", titleOne);

module.exports = Concept;
