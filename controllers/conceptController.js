const db = require("../models");

// Defining methods for the conceptController
module.exports = {
  findAll: function(req, res) {
    db.Concept
      .find(req.query)
      .sort({ date: -1 })
      .then(dbConcept => res.json(dbConcept))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Concept
      .findById(req.params.id)
      .then(dbConcept => res.json(dbConcept))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Concept
      .create(req.body)
      .then(dbConcept => res.json(dbConcept))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Concept
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbConcept => res.json(dbConcept))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Concept
      .findById({ _id: req.params.id })
      .then(dbConcept => dbConcept.remove())
      .then(dbConcept => res.json(dbConcept))
      .catch(err => res.status(422).json(err));
  }
};
