//require orm file
var orm = require("../config/orm.js");

//call the three different orm functions
var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },

  insertOne: function(table, field, name, cb) {
    console.log("name: " + name);
    orm.insertOne(table, field, name, function(res) {
      cb(res);
    });
  },

  updateOne: function(table, field, idNum, cb) {
    console.log("idNum: " + idNum);
    orm.updateOne(table, field, idNum, function(res) {
      cb(res);
    });
  }
};


module.exports = burger;
