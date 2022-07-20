const config = require('./dbConfig');
const mysql    = require('mysql');

const connection = mysql.createConnection({
    host: config.host,
    user: config.user, 
    password: config.password,
    database: config.database,        
});

// connection.connect();



//gets user data
const getUsers = async() => {
    try{


        
  const userData = await connection.query('SELECT * FROM USERS', function(err, rows, field)
{
    if (err) throw err;
    console.log(rows[0]);
});

connection.end();
    }
    catch(error) {
        // console.log(error);
    }
}

module.exports = {getUsers}