module.exports = function(sequelize, DataTypes) {
    var Brainstorm = sequelize.define('Brainstorm', {
        brainstorm: DataTypes.STRING
    });
    return Brainstorm;
};