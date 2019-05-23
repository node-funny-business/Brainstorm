const Sequelize = require('sequelize');

let sequelize;

if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
     sequelize = new Sequelize(process.env.DATABASE_NAME,process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        dialect: process.env.DATABASE_DIALECT
    });
} else {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
}


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Brainstorm = require('../models/brainstorm')(sequelize, Sequelize);
db.Concept = require('../models/concept-model')(sequelize, Sequelize);
db.Idea = require('../models/idea-model')(sequelize, Sequelize);
db.Steps = require('../models/steps')(sequelize, Sequelize);

db.Steps.belongsTo(db.Idea, {
    foreignKey: {
        allowNull: false
    }
});
db.Idea.hasMany(db.Steps);
db.Idea.belongsTo(db.Concept, {
    foreignKey: {
        allowNull: false
    }
});
db.Concept.hasMany(db.Idea);
db.Concept.belongsTo(db.Brainstorm, {
    foreignKey: {
        allowNull: false
    }
});
db.Brainstorm.hasMany(db.Concept);



module.exports = db;