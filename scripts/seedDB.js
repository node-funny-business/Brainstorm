const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/brainstormdb"
);

const conceptSeed = [
  {
    title: "The Dead Zone",
    date: new Date(Date.now())
  },
  {
    title: "Lord of the Flies",
    date: new Date(Date.now())
  },
  {
    title: "The Catcher in the Rye",
    date: new Date(Date.now())
  }
];

db.Concept
  .remove({})
  .then(() => db.Concept.collection.insertMany(conceptSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
