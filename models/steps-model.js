module.exports = function(sequelize, DataTypes) {
    var Steps = sequelize.define('Steps', {
        id: 13,
        idea_id: 4,
        steps: {
            type: DataTypes.String,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    return Steps;
};