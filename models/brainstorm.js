module.exports = function(sequelize, DataTypes) {
    var Brainstorm = sequelize.define('Brainstorm', {
        name: DataTypes.STRING,s
    });
    return Brainstorm;
};