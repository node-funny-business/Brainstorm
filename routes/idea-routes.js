var db = require('../controllers/db');

module.exports = function(app) {
    app.get('/api/ideas', function(req, res) {
        db.Idea.findAll({}).then(result => res.json(result))
        .catch(function (err) {
            console.log(err.message);
            res.send(500);
        });
    });

    app.get('/api/ideas/:idea', function(req, res) {
        db.Idea.findAll({
            where: {
                idea: req.params.idea
            }
        }).then(function (result) {
            res.json(result)
        }).catch(err => {
            console.log(err.message);
            res.send(500);
        });
    });

    app.post('/api/ideas', function(req, res) {
        db.Idea.create({
            idea: req.body.idea
        }).then(result => res.json(result))
        .catch(function (err) {
            console.log(err.message);
            res.send(500);
        });
    });

    app.delete('/api/ideas/:id', function(req, res) {
        db.Idea.delete({
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
        db.Idea.update({
            idea: req.body.idea
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