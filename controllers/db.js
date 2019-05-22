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

db.brainstorm = require('../models/brainstorm')(sequelize, Sequelize);
db.concept = require('../models/concept-model')(sequelize, Sequelize);
db.idea = require('../models/idea-model')(sequelize, Sequelize);
db.steps = require('../models/steps-model')(sequelize, Sequelize);

db.steps.belongsTo(db.idea);
db.idea.hasMany(db.steps);
db.idea.belongsTo(db.concept);
db.concept.hasMany(db.idea);
db.concept.belongsTo(db.brainstorm);
db.brainstorm.hasMany(db.concept);

module.exports = db;