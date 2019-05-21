module.exports = function(sequelize, DataTypes) {
    var Concept = sequelize.define('Concept', {
        concept: {
            type: DataTypes.String,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    return Concept;
};