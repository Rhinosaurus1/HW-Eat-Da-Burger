
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  
  insertOne: function(name, cb) {
    console.log("name: " + name);
    orm.insertOne(name, function(res) {
      cb(res);
    });
  },
  updateOne: function(idNum, cb) {
    console.log("idNum: " + idNum);
    orm.updateOne(idNum, function(res) {
      cb(res);
    });
  }
};


module.exports = burger;
