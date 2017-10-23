var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.insertOne("burgers", "burger_name", req.body.burger_name, function(result) {
    res.redirect("/");
  });
});

router.put("/api/burgers/:id", function(req, res) {
  burger.updateOne("burgers", "id", req.params.id, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } 
    else {
      res.redirect("/");
    }
  });
});


module.exports = router;