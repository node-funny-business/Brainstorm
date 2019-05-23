var db = require('../controllers/db');

// will need to add users as soon as we get a user up and going. GET route will need to be changed
module.exports = function (app) {
//--------------------------------------------------------------------------
    //  get routes

    app.get('/api/brainstorm', function (req, res) {
        db.brainstorm.findAll({
        }).then(function (result) {
            res.json(result);
        }).catch(err => {
            console.log(err.message);
        });
    });  // works
    

    app.get('/api/brainstorm/id/:brainstorm', function (req, res) {
        db.brainstorm.findOne({
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

    app.get('/api/concept/brainstorm/:brainstorm_id', function (req, res) {
        db.concept.findAll({
            where: {
                brainstorm_id: req.params.brainstorm_id
            }
        }).then(function (result) {
            res.json(result);
        }).catch(err => {
            console.log(err.message);
        });
    });

    app.get('/api/concept/id/:brainstorm_id', function (req, res) {
        db.concept.findOne({
            where: {
                brainstorm_id: req.params.brainstorm_id,
            }
        }).then(function (result) {
            res.json(result)
        }).catch(err => {
            console.log(err.message);
            res.send(500);
        });
    });

    app.get('/api/idea/concept/:concept_id', function (req, res) {
        db.idea.findAll({
            where: {
                concept_id: req.params.concept_id
            }
        }).then(function (result) {
            res.json(result);
        }).catch(err => {
            console.log(err.message);
        });
    });

    app.get('/api/brainstorm/id/:brainstorm', function (req, res) {
        db.idea.findOne({
            where: {
                brainstorm_id: req.params.brainstorm_id,
            }
        }).then(function (result) {
            res.json(result)
        }).catch(err => {
            console.log(err.message);
            res.send(500);
        });
    });

    app.get('/api/step/idea/:idea_id', function (req, res) {
        db.steps.findAll({
            where: {
                idea_id: req.params.idea_id
            }
        }).then(function (result) {
            res.json(result);
        }).catch(err => {
            console.log(err.message);
        });
    });

    //---------------------------------------------------------------------------
    // post routes

    app.post('/api/brainstorm/save', function (req, res) {
        db.brainstorm.create({
            name: req.body.name
        }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });  // works

    app.post('/api/concept/save', function (req, res) {
        db.concept.create({
            concept: req.body.concept
        }, {
                where: {
                    brainstorm_id: req.body.brainstorm_id
                }
        }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });

    app.post('/api/idea/save', function (req, res) {
        db.idea.create({
            idea: req.body.idea
        }, {
                where: {
                    concept_id: req.body.concept_id
                }
        }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });

    app.post('/api/steps', function (req, res) {
        db.steps.create({
            steps: req.body.idea
        }, {
                where: {
                    idea_id: req.body.idea_id
                }
        }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });
//--------------------------------------------------------------------------
// delete routes 

    app.delete('/api/brainstorm/id/:id', function (req, res) {
        db.brainstorm.delete({
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
        db.concept.delete({
            where: {
                brainstorm_id: req.body.brainstorm_id
            }
        }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });

    app.delete('/api/idea/id/', function(req, res) {
        db.idea.delete({
            where: {
                concept_id: req.body.concept_id
            }
        }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });


    app.delete('/api/step/id/', function(req, res) {
        db.step.delete({
            where: {
                idea_id: req.body.idea_id
            }
        }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });

   

//--------------------------------------------------------------------------
// update routes

    app.put('/api/brainstorm', function (req, res) {
        db.brainstorm.update({
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
        db.concept.update({
            concept: req.body.concept
        }, {
                where: {

                    brainstorm_id: req.body.brainstorm_id
                }
            }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });

    app.put('/api/idea', function (req, res) {
        db.idea.update({
            idea: req.body.idea
        }, {
                where: {
                    concept_id: req.body.concept_id
                }
            }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });

    app.put('/api/step/save', function (req, res) {
        db.steps.update({
            steps: req.body.steps
        }, {
                where: {
                    idea_id: req.body.idea_id
                }
            }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });
}