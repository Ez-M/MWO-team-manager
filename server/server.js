const express = require("express");
const cors = require("cors");
const { connection } = require("./dbFiles/dbOperation.js");
const { response } = require("express");

const user = require('./controllers/userControllers');
const team = require('./controllers/teamControllers');
const { default: App } = require("./src/App.js");

const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

//test functions for API
app.get("/api", function (req, res) {
  console.log("Called api");
  res.send({ result: "Hello!" });
});

// app.get('/quit', function(req,res) {
//     console.log("Called quit");
//     res.send({result: 'Good Bye!'});
// });

// dbOperation.getUsers().then(res => {
//     // console.log(res)
// });

app.get("/test", function (req, res) {
  console.log("called api test");
  res.send({ result: "test" });
});


// ROUTES

app.get("/users", user.getAllUsers);

app.post('user', user.postUser)


app.get("/user/:id", user.getUser);

app.get("/teams", team.getAllTeams);


app.get("/team/:id", team.getTeam);


app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT} `));
