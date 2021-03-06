const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

var db = require('./controllers/db');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view


require('./routes/api-routes.js')(app);
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT' + PORT);
  });
});
