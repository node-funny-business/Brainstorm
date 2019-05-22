module.exports = function(sequelize, DataTypes) {
    var Concept = sequelize.define('Concept', {
        concept: DataTypes.STRING,
    });
    return Concept;
};