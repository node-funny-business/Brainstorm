var db = require('../controllers/db');

// will need to add users as soon as we get a user up and going. GET route will need to be changed
module.exports = function(app) {
    app.get('/api/brainstorm', function(req, res) {
        db.Brainstorm.findAll({
            include: [
                {
                    model: db.concept,
                    include: [
                        {
                            model: db.idea,
                            include: [
                                {
                                    model: db.steps
                                }
                            ]
                        }
                    ]
                }
            ]
        }).then(brainstorms => {
            const resObj = brainstorms.map(brainstorm => {
                return Object.assign(
                    {},
                    {
                        user_id: user_id,
                        id: brainstorm.id,
                        brainstorm: brainstorm.idea,
                        ideas: brainstorm.ideas.map(idea => {
                            return Object.assign(
                                {},
                                {
                                    concept_id: concept_id,
                                    id: idea.id,
                                    idea: idea.steps,
                                    steps: idea.steps.map(step => {
                                        return Object.assign(
                                            {},
                                            {
                                                idea_id: idea_id,
                                                id: step.id,
                                                steps: step.steps
                                            }
                                        )
                                    })
                                }
                            )
                        })
                    }
                )
            });
            res.json(resObj);
        });
    });



    app.get('/api/brainstorm/:brainstorm', function(req, res) {
        db.Brainstorom.findAll({
            where: {
                brainstorm: req.params.brainstorm
            }
        }).then(function (result) {
            res.json(result)
        }).catch(err => {
            console.log(err.message);
            res.send(500);
        });
    });

    app.post('/api/brainstorm', function(req, res) {
        db.Brainstorm.create({
             brainstorm: req.body.brainstorm
        }).then(result => res.json(result))
        .catch(function (err) {
            console.log(err.message);
            res.send(500);
        });
    });

    app.post('/api/brainstorm/concept', function(req, res) {
        db.Concept.create({
             brainstorm_id: req.body.id,
             concept: req.body.concept
        }).then(result => res.json(result))
        .catch(function (err) {
            console.log(err.message);
            res.send(500);
        });
    });

    app.post('/api/brainstorm/concept/idea', function(req, res) {
        db.Idea.create({
             concept_id: req.body.id,
             idea: req.body.idea
        }).then(result => res.json(result))
        .catch(function (err) {
            console.log(err.message);
            res.send(500);
        });
    });

    app.post('/api/brainstorm/concept/idea/steps', function(req, res) {
        db.Steps.create({
             idea_id: req.body.id,
             steps: req.body.steps
        }).then(result => res.json(result))
        .catch(function (err) {
            console.log(err.message);
            res.send(500);
        });
    });

    app.delete('/api/brainstorm/:id', function(req, res) {
        db.Brainstorm.delete({
            where: {
                id: req.params.id
            }
        }).then(result => res.json(result))
        .catch(function (err) {
            console.log(err.message);
            res.send(500);
        });
    });

    app.put('/api/brainstorm', function(req, res) {
        db.Brainstorm.update({
            brainstorm: req.body.brainstorm
        },{
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