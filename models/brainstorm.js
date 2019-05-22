module.exports = function(sequelize, DataTypes) {
    var Brainstorm = sequelize.define('Brainstorm', {
        brainstorm: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    return Brainstorm;
};