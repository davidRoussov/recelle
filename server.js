const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

import api from './api/api';

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

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, './client/build')));

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
