module.exports = function(sequelize, DataTypes) {
    var Brainstorm = sequelize.define('Brainstorm', {
        brainstorm: {
            type: DataTypes.String,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    return Brainstorm;
};