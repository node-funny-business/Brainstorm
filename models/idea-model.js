module.exports = function(sequelize, DataTypes) {
    var Idea = sequelize.define('Idea', {
        id: 12,
        concept_id: 3,
        idea: {
            type: DataTypes.String,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    return Idea;
};