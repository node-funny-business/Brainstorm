module.exports = function(sequelize, DataTypes) {
    var Steps = sequelize.define('Steps', {
        steps: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    return Steps;
};