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
    

    app.get('/api/brainstorm/id/:BrainstormId', function (req, res) {
        db.Brainstorm.findOne({
            where: {
                id: req.params.BrainstormId,
            }
        }).then(function (result) {
            res.json(result)
        }).catch(err => {
            console.log(err.message);
            res.send(500);
        });
    }); // works

    app.get('/api/concept/brainstorm/:BrainstormId', function (req, res) {
        db.Concept.findAll({
            where: {
                BrainstormId: req.params.BrainstormId
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
                id: req.params.id
            }
        }).then(function (result) {
            res.json(result)
        }).catch(err => {
            console.log(err.message);
            res.send(500);
        });
    });

    app.get('/api/idea/concept/:ConceptId', function (req, res) {
        db.Idea.findAll({
            where: {
                ConceptId: req.params.ConceptId
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

    app.get('/api/step/idea/:IdeaId', function (req, res) {
        db.Steps.findAll({
            where: {
                IdeaId: req.params.IdeaId
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

    app.post('/api/brainstorm/save/', function (req, res) {
        db.Brainstorm.create({
            brainstorm: req.body.brainstorm
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
            step: req.body.step,
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
                id: req.params.id
            }
        }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });

    app.delete('/api/concept/id/:id', function(req, res) {
        console.log(req.params)
        db.Concept.destroy({
            where: {
                id: req.params.id
            }
        }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    }); //  work

    app.delete('/api/idea/id/:id', function(req, res) {
        db.Idea.destroy({
            where: {
                id: req.params.id
            }
        }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });


    app.delete('/api/step/id/:id', function(req, res) {
        db.Steps.destroy({
            where: {
                id: req.params.id
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
            brainstorm: req.body.brainstorm
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
            concept: req.body.concept,
        }, {
                where: {
                    id: req.body.id
                }
            }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    }); //working

    app.put('/api/idea/id/', function (req, res) {
        db.Idea.update({
            idea: req.body.idea
        }, {
                where: {
                    id: req.body.id
                }
            }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });

    app.put('/api/step/id/', function (req, res) {
        db.Steps.update({
            step: req.body.step
        }, {
                where: {
                    id: req.body.id
                }
            }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });
}