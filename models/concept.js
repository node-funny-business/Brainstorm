module.exports = function(sequelize, DataTypes) {
    var Concept = sequelize.define('Concept', {
        concept: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    return Concept;
};

// NOT THIS ONE