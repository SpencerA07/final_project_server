    
const express = require("express");
const cors = require("cors");
// const uuid = require("uuid");

var server = express();
var port = process.env.PORT || 3000;

// Middleware

server.use(cors());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(function(req, res, next) {
  console.log(`New request: ${req.method} ${req.path} on ${new Date()}`);
  next();
});

// Data
var data = require("./data.js");

// Endpoints
server.get("/test", function(req, res) {
  var response = {
    test: data.test
  };
  res.json(response);
});

// GET endpoint to retrieve user data
server.get("/money", function(req, res) {
  var response = {
    userdata: data.users
  };
  response.userdata.forEach(function(user) {
    user.totalMonies = user.savingsAcct + user.checkingAcct;
  });
  res.json(response);
});

// POST endpoind to add new user data
server.post("/money", function(req, res) {
  
});

// Start the server
server.listen(port, function() {
  console.log(`Listening on port ${port}.`);
});