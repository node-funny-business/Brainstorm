module.exports = function(sequelize, DataTypes) {
    var Idea = sequelize.define('Idea', {
        idea: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    return Idea;
};