var db = require("../controllers/db")

var seeds = {
    Brainstorm: [{
    name: "pizza",
},{
    name: "Pie"
},{
    name: "Sandwhich"
}], Concept: [{
    concept: "hello boys"
}], Idea: [{
    idea: "hey girl hey"
}], Steps: [{
    steps: "dsjaklfl"
}]};
db.sequelize.sync({ force: true }).then(function () {
    for (var key in seeds) {

        for (var i = 0; i < seeds[key].length; i++) {
            db[key].create(seeds[key][i])
            .then(function (dbBrainstorm) {
                console.log('We made: ', dbBrainstorm);
            });
        }
    }
});