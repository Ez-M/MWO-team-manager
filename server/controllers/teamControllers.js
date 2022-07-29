const { connection } = require("../dbFiles/dbOperation.js");


exports.getAllTeams = function(req, res){

    let sql = "SELECT * FROM TEAMS";

connection.query(sql, function (err, results, next) {
  if (err) throw err;
  
  res.send(results);      
});
}



exports.getTeam = function(req, res){

    let sql = `SELECT * FROM TEAMS WHERE id = ${req.params.id}`;

connection.query(sql, function (err, results, next) {
  if (err) throw err;
  
  res.send(results);      
});
}