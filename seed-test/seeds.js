var db = require("../controllers/db")

var seeds = [{
    Brainstorm: [{
    name: "pizza"
},{
    name: "Pie"
},{
    name: "Sandwhich"
}]}, { Concept: [{
    concept: "hello boys",
    BrainstormId: 1
},{
    concept: "meh",
    BrainstormId: 1
},{
    concept: "bleh",
    BrainstormId: 1
}]}, {Idea: [{
    idea: "hey girl hey",
    ConceptId: 1
},{
    idea: "hey",
    ConceptId: 1
},{
    idea: "ey",
    ConceptId: 1
}]}, {Steps: [{
    steps: "dsjaklfl",
    IdeaId: 1
},{
    steps: "fioejfi",
    IdeaId: 1
},{
    steps: "fewjhfewhfoiwh",
    IdeaId: 1
}]}];
db.sequelize.sync({ force: true }).then(async function () {
    for (var i = 0; i < seeds.length; i++) {
        for (var key in seeds[i]) {
            var promises = [];
            for (var j = 0; j < seeds[i][key].length; j++) {
                var promise = db[key].create(seeds[i][key][j])
                .then(function (dbBrainstorm) {
                    console.log('We made: ', dbBrainstorm);
                });
                promises.push(promise);
            }
            await Promise.all(promises);
        }
    }
});