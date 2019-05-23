module.exports = function(sequelize, DataTypes) {
    var Steps = sequelize.define('Steps', {
        steps: DataTypes.STRING,
    });
    return Steps;
};