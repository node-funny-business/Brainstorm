const Sequelize = require('sequelize');
const env = require('dotenv');

const sequelize = new Sequelize(env.DATABASE_NAME, {
    host: env.DATABASE_HOST,
    port: env.DATABASE_NAME,
    dialect: env.DATABASE_DIALECT,
    define: {
        underscored: true
    }
});
// what is ./env

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.brainstorm = require('../models/brainstorm');
db.concept = require('../models/concept-model');
db.idea = require('../models/idea-model');
db.steps = require('../models/steps-model');

db.steps.belongsTo(db.idea);
db.idea.hasMany(db.steps);
db.idea.belongsTo(db.concept);
db.concept.hasMany(db.idea);
db.concept.belongsTo(db.brainstorm);
db.brainstorm.hasMany(db.concept);

module.exports = db;