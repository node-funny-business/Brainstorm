module.exports = function(sequelize, DataTypes) {
    var Idea = sequelize.define('Idea', {
        idea: DataTypes.STRING,
    });
    return Idea;
};