
//require default connection file
var connection = require("../config/connection.js");

//define the three different mySQL queries
var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function(table, field, name, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?);"
    console.log(queryString);
    connection.query(queryString, [table, field, name] , function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
  updateOne: function(table, field, idNum, cb) {
    var queryString = "UPDATE ?? SET devoured ='1' WHERE ?? = ?";
    console.log(queryString);
    connection.query(queryString,[table, field, idNum], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;