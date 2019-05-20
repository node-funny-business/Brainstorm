const Sequelize = require('sequelize');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.brainstorm = require('../models/brainstorm');
db.concept = require('../models/concept-model');
db.idea = require('../models/idea-model');
db.steps = require('../models/steps-model');

db.steps.belongsTo(db.idea);
db.idea.belongsTo(db.concept);
db.concept.belongsTo(db.brainstorm);

module.exports = db;