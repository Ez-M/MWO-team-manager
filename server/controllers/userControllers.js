const { password } = require("../dbFiles/dbConfig.js");
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

  exports.postUser = function(req, res){
    const body = req.body;

    if(!(body.username && body.email && body.password)) {
      return res.status(400).send({ error: "submit rejected: missing data"});
      
    }
  
          let sql = `INSERT INTO Users(email, username, password) VALUES (${body.email}, ${body.username}, ${body.password})`;
  
      connection.query(sql, function (err, results) {
        if (err) throw err;
        //  console.log(results);
  
        // console.log(data)
        res.send(results);
      });
    }

