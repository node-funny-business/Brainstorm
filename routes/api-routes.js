var db = require('../controllers/db');

// will need to add users as soon as we get a user up and going. GET route will need to be changed
module.exports = function (app) {
    // app.get('/api/brainstorm', function (req, res) {
    //     db.brainstorm.findAll({
    //         include: [
    //             {
    //                 model: db.concept,
    //                 include: [
    //                     {
    //                         model: db.idea,
    //                         include: [
    //                             {
    //                                 model: db.steps
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             }
    //         ]
    //     }).then(brainstorms => {
    //         const resObj = brainstorms.map(brainstorm => {
    //             return Object.assign(
    //                 {},
    //                 {
    //                     id: brainstorm.id,
    //                     brainstorm: brainstorm.idea,
    //                     ideas: brainstorm.ideas.map(idea => {
    //                         return Object.assign(
    //                             {},
    //                             {
    //                                 concept_id: concept_id,
    //                                 id: idea.id,
    //                                 idea: idea.steps,
    //                                 steps: idea.steps.map(step => {
    //                                     return Object.assign(
    //                                         {},
    //                                         {
    //                                             idea_id: idea_id,
    //                                             id: step.id,
    //                                             steps: step.steps
    //                                         }
    //                                     )
    //                                 })
    //                             }
    //                         )
    //                     })
    //                 }
    //             )
    //         });
    //         res.json(resObj);
    //     });
    // });

    //not convoluted way: routes
    // get all brainstorms
    app.get('/api/brainstorm/', function(req, res) {
        db.brainstorm.findAll({
        }).then(function (result) {
            res.json(result);
        }).catch(err => {
            console.log(err.message);
        });
    });

    app.get('/api/brainstorm/concept', function(req, res) {
        db.concept.findAll({
            where: {
                brainstorm_id: req.body.brainstorm_id
            }
        }).then(function (result) {
            res.json(result);
        }).catch(err => {
            console.log(err.message);
        });
    });

    app.get('/api/brainstorm/concept/idea', function(req, res) {
        db.idea.findAll({
            where: {
                concept_id: req.body.concept_id
            }
        }).then(function (result) {
            res.json(result);
        }).catch(err => {
            console.log(err.message);
        });
    });

    app.get('/api/brainstorm/concept/idea/steps', function(req, res) {
        db.steps.findAll({
            where: {
                idea_id: req.body.idea_id
            }
        }).then(function (result) {
            res.json(result);
        }).catch(err => {
            console.log(err.message);
        });
    });

    //---------------------------------------------------------------------------
    // get one brainstorm
    app.get('/api/brainstorm/:brainstorm', function (req, res) {
        db.brainstorm.findAll({
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

    app.post('/api/brainstorm', function (req, res) {
        db.brainstorm.create({
            id: req.body.id,
            brainstorm: req.body.brainstorm
        }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });

    app.post('/api/brainstorm/concept', function (req, res) {
        db.concept.create({
            id: req.body.id,
            brainstorm_id: req.body.id,
            concept: req.body.concept
        }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });

    app.post('/api/brainstorm/concept/idea', function (req, res) {
        db.idea.create({
            id: req.body.id,
            concept_id: req.body.id,
            idea: req.body.idea
        }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });

    app.post('/api/brainstorm/concept/idea/steps', function (req, res) {
        db.steps.create({
            id: req.body.id,
            idea_id: req.body.id,
            steps: req.body.steps
        }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });

    app.delete('/api/brainstorm/:id', function (req, res) {
        db.brainstorm.delete({
            where: {
                id: req.params.id
            }
        }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });

    app.put('/api/brainstorm', function (req, res) {
        db.brainstorm.update({
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
    });
}