module.exports = function(sequelize, DataTypes) {
    var Brainstorm = sequelize.define('Brainstorm', {
        id: 10,
        parent_id: null,
        text_type: 'Brainstorm',
        name: {
            type: DataTypes.String,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        
    });
    return Brainstorm;
};