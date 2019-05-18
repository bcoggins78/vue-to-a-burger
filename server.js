const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));
}

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(".client/public"));

require("./controllers/burgersController.js")(app);

// Sample API
app.get('/api/test', function (req, res) {
  res.json({ greeting: 'Welcome to your Vue App' });
});

db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});
