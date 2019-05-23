var db = require('../controllers/db');

// will need to add users as soon as we get a user up and going. GET route will need to be changed
module.exports = function (app) {
//--------------------------------------------------------------------------
    //  get routes

    app.get('/api/brainstorm', function (req, res) {
        db.Brainstorm.findAll({
        }).then(function (result) {
            res.json(result);
        }).catch(err => {
            console.log(err.message);
        });
    });  // works
    

    app.get('/api/brainstorm/id/:brainstorm', function (req, res) {
        db.Brainstorm.findOne({
            where: {
                id: req.params.brainstorm,
            }
        }).then(function (result) {
            res.json(result)
        }).catch(err => {
            console.log(err.message);
            res.send(500);
        });
    }); // works

    app.get('/api/concept/brainstorm/:brainstorm_id', function (req, res) {
        db.Concept.findAll({
            where: {
                BrainstormId: req.params.brainstorm_id
            }
        }).then(function (result) {
            res.json(result);
        }).catch(err => {
            console.log(err.message);
        });
    }); // works

    app.get('/api/concept/id/:id', function (req, res) {
        db.Concept.findOne({
            where: {
                id: req.params.id,
            }
        }).then(function (result) {
            res.json(result)
        }).catch(err => {
            console.log(err.message);
            res.send(500);
        });
    });

    app.get('/api/idea/concept/:concept_id', function (req, res) {
        db.Idea.findAll({
            where: {
                ConceptId: req.params.concept_id
            }
        }).then(function (result) {
            res.json(result);
        }).catch(err => {
            console.log(err.message);
        });
    });

    app.get('/api/idea/id/:id', function (req, res) {
        db.Idea.findOne({
            where: {
                id: req.params.id,
            }
        }).then(function (result) {
            res.json(result)
        }).catch(err => {
            console.log(err.message);
            res.send(500);
        });
    });

    app.get('/api/step/idea/:idea_id', function (req, res) {
        db.Steps.findAll({
            where: {
                IdeaId: req.params.idea_id
            }
        }).then(function (result) {
            res.json(result);
        }).catch(err => {
            console.log(err.message);
        });
    });

    app.get('/api/step/id/:id', function (req, res) {
        db.Steps.findOne({
            where: {
                id: req.params.id,
            }
        }).then(function (result) {
            res.json(result)
        }).catch(err => {
            console.log(err.message);
            res.send(500);
        });
    });

    //---------------------------------------------------------------------------
    // post routes

    app.post('/api/brainstorm/save', function (req, res) {
        db.Brainstorm.create({
            name: req.body.name
        }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });  // works

    app.post('/api/concept/save/', function (req, res) {
        db.Concept.create({
            concept: req.body.concept,
            BrainstormId: req.body.BrainstormId
        }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    }); // working

    app.post('/api/idea/save/', function (req, res) {
        db.Idea.create({
            idea: req.body.idea,
            ConceptId: req.body.ConceptId
        }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });

    app.post('/api/step/save/', function (req, res) {
        db.Steps.create({
            steps: req.body.idea,
            IdeaId: req.body.IdeaId
        }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });
//--------------------------------------------------------------------------
// delete routes 

    app.delete('/api/brainstorm/id/:id', function (req, res) {
        db.Brainstorm.destroy({
            where: {
                id: req.params.id,
            }
        }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });

    app.delete('/api/concept/id/', function(req, res) {
        db.Concept.destroy({
            where: {
                id: req.body.id,
                BrainstormId: req.body.BrainstormId
            }
        }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    }); //  work

    app.delete('/api/idea/id/', function(req, res) {
        db.Idea.destroy({
            where: {
                id: req.body.id,
                ConceptId: req.body.ConceptId
            }
        }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });


    app.delete('/api/step/id/', function(req, res) {
        db.Step.destroy({
            where: {
                id: req.body.id,
                IdeaId: req.body.IdeaId
            }
        }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });

   

//--------------------------------------------------------------------------
// update routes

    app.put('/api/brainstorm/id/', function (req, res) {
        db.Brainstorm.update({
            name: req.body.name
        }, {
                where: {
                    id: req.body.id
                }
            }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    }); //works


    app.put('/api/concept/id/', function (req, res) {
        db.Concept.update({
            concept: req.body.concept
        }, {
                where: {
                    id: req.body.id,
                    BrainstormId: req.body.BrainstormId
                }
            }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    }); //working

    app.put('/api/idea/save/', function (req, res) {
        db.Idea.update({
            idea: req.body.idea
        }, {
                where: {
                    id: req.body.id,
                    ConceptId: req.body.ConceptId
                }
            }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });

    app.put('/api/step/save', function (req, res) {
        db.Steps.update({
            steps: req.body.steps
        }, {
                where: {
                    id: req.body.id,
                    IdeaId: req.body.IdeaId
                }
            }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });
}