const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const titleOne = new Schema({
<<<<<<< HEAD

    topic: {
      name: String,
      type: String,
      concepts: {
        name: String,
        idea: {
          name: String,
          steps: []
        }
=======
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
>>>>>>> origin/goon2
      }
    },
    userCreated: {
      type: Date,
      default: Date.now
    }
});
// might have to use new Map

const Concept = mongoose.model("Concept", titleOne);

module.exports = Concept;
