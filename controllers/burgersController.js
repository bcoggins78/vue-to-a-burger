var db = require("../models");

module.exports = function (app) {

  // get route
  app.get("/api/burgers", function (req, res) {
    db.Burger.findAll({}).then(function (burgerData) {
      res.json(burgerData);
    });
  });

  // post route
  app.post("/api/burgers", function (req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name,
    }).then(function (result) {
      console.log(result);
      // Send back the ID
      res.json({ id: result.insertId });
    });
  });

  // put route
  app.put("/api/burgers/:id", function (req, res) {
    db.Burger.update({
      // Changes devoured status to true
      devoured: true,
    }, {
        where: {
          id: req.params.id
        }
      })
      .then(function (result) {
        console.log(result);
        // Send back response and let page reload from .then in Ajax
        res.sendStatus(200);
      });
  });

};
