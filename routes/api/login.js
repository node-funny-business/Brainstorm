const User = require('../../models/User');


app.post("/submit", function(req, res) {
    User.create(req.body)
      .then(function(dbUser) {
        // If saved successfully, send the the new User document to the client
        res.json(dbUser);
      })
      .catch(function(err) {
        res.json(err);
      });
  });