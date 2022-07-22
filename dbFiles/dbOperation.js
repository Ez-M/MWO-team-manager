const config = require('./dbConfig');
const mysql    = require('mysql');

const connection = mysql.createConnection({
    host: config.host,
    user: config.user, 
    password: config.password,
    database: config.database,        
});

// connection.connect();





module.exports = {connection};