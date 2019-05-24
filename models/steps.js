module.exports = function(sequelize, DataTypes) {
    var Steps = sequelize.define('Steps', {
        step: DataTypes.STRING,
    });
    return Steps;
};