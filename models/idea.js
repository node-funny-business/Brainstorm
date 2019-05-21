// module.exports = function(sequelize, DataTypes) {
//     var Idea = sequelize.define('Idea', {
//         idea: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len: [1]
//             }
//         },
//         {classMethods: {
//             associate: function(models) {
//               Idea.hasOne(models.Concept);
//             }
//         }
//     }
//     });
//     return Idea;
// };

module.exports = function(sequelize, DataTypes) {
    var Idea = sequelize.define("Idea", {
      idea: {
        type: DataTypes.STRING,
        allowNull: false
      },
    }, {
      classMethods: {
        associate: function(models) {
          Idea.hasOne(models.Concept);
        }
      }
    });
    return Idea;
   };