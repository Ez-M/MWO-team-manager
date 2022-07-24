const { connection } = require("./dbOperation.js");



exports.getAllUsers = function(req, res){

        let sql = "SELECT * FROM USERS";

    connection.query(sql, function (err, results, next) {
      if (err) throw err;
      //  console.log(results);
        let tempmail =[]
            for (const key in results) {
                if (results[key].email) {
                    tempmail.push(results[key].email);
                    
                }
            }
        
      // console.log(data)
      res.send(tempmail);      
    });
  }



exports.getUser = function(req, res){

        let sql = `SELECT * FROM USERS WHERE id = ${req.params.id}`;

    connection.query(sql, function (err, results, next) {
      if (err) throw err;
       console.log(results);
       console.log('kek');
        
        
      // console.log(data)
      res.send(results);      
    });
  }

