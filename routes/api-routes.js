var db = require('../models');

module.exports = function(app) {
    app.get('/api/concepts', function(req, res) {
        db.Concept.findAll({}).then(result => res.json(result))
        .catch(function (err) {
            console.log(err.message);
            res.send(500);
        });
    });

    app.get('/api/concepts/:conecept', function(req, res) {
        db.Concept.findAll({
            where: {
                concept: req.params.concept
            }
        }).then(function (result) {
            res.json(result)
        }).catch(err => {
            console.log(err.message);
            res.send(500);
        });
    });

    app.post('/api/concepts', function(req, res) {
        db.Concept.create({
            name: req.body.name
        }).then(result => res.json(result))
        .catch(function (err) {
            console.log(err.message);
            res.send(500);
        });
    });

    app.delete('/api/concepts/:id', function(req, res) {
        db.Concept.delete({
            where: {
                id: req.params.id
            }
        }).then(result => res.json(result))
        .catch(function (err) {
            console.log(err.message);
            res.send(500);
        });
    });

    app.put('/api/concepts', function(req, res) {
        db.Concept.update({
            name: req.body.name
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