const express = require('express');
const path = require('path');
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 5000;

import api from './api/api';
import passport from 'passport';
import session from 'express-session';

// testing database ************************
// const { Pool, Client } = require('pg');
// const config = require('./config');
// const client = new Client(config.database.url);
// client.connect()
//   .then(test => {
//     client.query('SELECT * FROM test;')
//       .then(results => console.log(JSON.stringify(results.rows, null, 2)));
  // });
//************************* 

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, './client/build')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Answer API requests.
app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"Hello from the custom server!"}');
});

api(app);

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
