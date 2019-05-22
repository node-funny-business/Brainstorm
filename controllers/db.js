const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_NAME,process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    dialect: process.env.DATABASE_DIALECT,
    define: {
        underscored: true
    }
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Brainstorm = require('../models/brainstorm')(sequelize, Sequelize);
db.Concept = require('../models/concept-model')(sequelize, Sequelize);
db.Idea = require('../models/idea-model')(sequelize, Sequelize);
db.Steps = require('../models/steps-model')(sequelize, Sequelize);

db.Steps.belongsTo(db.idea);
db.Idea.hasMany(db.steps);
db.Idea.belongsTo(db.concept);
db.Concept.hasMany(db.idea);
db.Concept.belongsTo(db.brainstorm);
db.Brainstorm.hasMany(db.concept);

module.exports = db;