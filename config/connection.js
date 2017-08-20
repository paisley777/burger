// Set up MySQL connection.
var mysql = require("mysql");
//the line below is turned off when deploying to heroku
//var dbKey = require("../config/dbKey.js");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: process.env.password || dbKey,
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM to use.
module.exports = connection;