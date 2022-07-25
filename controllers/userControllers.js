const { connection } = require("../dbFiles/dbOperation.js");



exports.getAllUsers = function(req, res){

        let sql = "SELECT * FROM USERS";

    connection.query(sql, function (err, results, next) {
      if (err) throw err;
      
      res.send(results);      
    });
  }



exports.getUser = function(req, res){

        let sql = `SELECT * FROM USERS WHERE id = ${req.params.id}`;

    connection.query(sql, function (err, results, next) {
      if (err) throw err;
       console.log(results);       
        
        
      // console.log(data)
      res.send(results);      
    });
  }

