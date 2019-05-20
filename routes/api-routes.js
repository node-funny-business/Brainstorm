var db = require('../controllers/db');

// will need to add users as soon as we get a user up and going. GET route will need to be changed
module.exports = function(app) {
    app.get('/api/brainstorm', function(req, res) {
        db.brainstorm.findAll({
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
                        brainstorm: brainstorm.idea,
                        ideas: brainstorm.ideas.map(idea => {
                            return Object.assign(
                                {},
                                {
                                    concept_id: concept_id,
                                    idea: idea.steps,
                                    steps: idea.steps.map(step => {
                                        return Object.assign(
                                            {},
                                            {
                                                idea_id: idea_id,
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

    // app.get('/api/concepts/:conecept', function(req, res) {
    //     db.Concept.findAll({
    //         where: {
    //             concept: req.params.concept
    //         }
    //     }).then(function (result) {
    //         res.json(result)
    //     }).catch(err => {
    //         console.log(err.message);
    //         res.send(500);
    //     });
    // });

    // app.post('/api/concepts', function(req, res) {
    //     db.Concept.create({
    //         name: req.body.name
    //     }).then(result => res.json(result))
    //     .catch(function (err) {
    //         console.log(err.message);
    //         res.send(500);
    //     });
    // });

    // app.delete('/api/concepts/:id', function(req, res) {
    //     db.Concept.delete({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(result => res.json(result))
    //     .catch(function (err) {
    //         console.log(err.message);
    //         res.send(500);
    //     });
    // });

    // app.put('/api/concepts', function(req, res) {
    //     db.Concept.update({
    //         name: req.body.name
    //     },{
    //         where: {
    //             id: req.body.id
    //         }
    //     }).then(result => res.json(result))
    //     .catch(function (err) {
    //         console.log(err.message);
    //         res.send(500);
    //     });
    // });
}