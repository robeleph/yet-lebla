const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRouter = require('./routes');
var passport = require('passport');

const app = express();

mongoose.connection.on('connected', () => {
  console.log('[ Yet-Lebal server ]    Connected to database mongodb @ 27017');
});

mongoose.connection.on('error', err => {
  if (err)
    console.log('[ Yet-Lebal server ]    Error in Database Connection: ' + err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(passport.initialize());

app.use('/api', apiRouter);
app.use(express.static(path.join(__dirname, 'client/')));
// app.use(express.static(path.join(__dirname, 'client/dist/')));
// app.use(express.static(path.join(__dirname, 'client/bower_components/')));
// app.get("*", (req, res) => res.sendFile(path.join(__dirname, "client/dist/index.html")));

module.exports = app;