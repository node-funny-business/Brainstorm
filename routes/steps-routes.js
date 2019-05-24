var db = require('../models');

module.exports = function(app) {
    app.get('/api/steps', function(req, res) {
        db.Steps.findAll({}).then(result => res.json(result))
        .catch(function (err) {
            console.log(err.message);
            res.send(500);
        });
    });

    app.get('/api/steps/:step', function(req, res) {
        db.Steps.findAll({
            where: {
                steps: req.params.steps
            }
        }).then(function (result) {
            res.json(result)
        }).catch(err => {
            console.log(err.message);
            res.send(500);
        });
    });

    app.post('/api/steps', function(req, res) {
        db.Steps.create({
            steps: req.body.steps
        }).then(result => res.json(result))
        .catch(function (err) {
            console.log(err.message);
            res.send(500);
        });
    });

    app.delete('/api/steps/:id', function(req, res) {
        db.Steps.delete({
            where: {
                id: req.params.id
            }
        }).then(result => res.json(result))
        .catch(function (err) {
            console.log(err.message);
            res.send(500);
        });
    });

    app.put('/api/steps', function(req, res) {
        db.Steps.update({
            steps: req.body.steps
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