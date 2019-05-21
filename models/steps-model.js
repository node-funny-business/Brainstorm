module.exports = function(sequelize, DataTypes) {
    var Steps = sequelize.define('Steps', {
        idea_id: null,
        idea: {
            type: DataTypes.String,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    return Steps;
};