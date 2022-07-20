const express = require('express');
const cors = require('cors');
const dbOperation = require('./dbFiles/dbOperation');
const { response } = require('express');


const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());




//test functions for API
app.get('/api', function(req,res) {
    console.log("Called api");
    res.send({result: 'Hello!'});
});

// app.get('/quit', function(req,res) {
//     console.log("Called quit");
//     res.send({result: 'Good Bye!'});
// });


// dbOperation.getUsers().then(res => {
//     // console.log(res)
// });
    dbOperation.getUsers();

// app.listen(API_PORT, ()=> console.log(`Listening on port ${API_PORT} `));