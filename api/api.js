import express from 'express';
import { Client } from 'pg';
import config from '../config';

const router = express.Router();

router.get('/blog', (request, response) => {
  const client = new Client(config.database.url);
  client.connect().then(() => {
    client.query('SELECT * FROM blog;')
      .then(results => {
        response.send({ data: results.rows });
      });
  });
});

router.post('/signup', (request, response) => {
  const data = request.body.user;
  const client = new Client(config.database.url);
  client.connect().then(() => {
    const query = `
      INSERT INTO r_user (first_name, last_name, email_address, password)
      VALUES ($1, $2, $3, $4);
    `;
    const params = [
      data.userInputsFirstName,
      data.userInputsLastName,
      data.userInputsEmailAddress,
      data.password
    ];

    client.query(query, params)
      .then(results => {
        response.sendStatus(201);
      })
      .catch(error => {
        response.sendStatus(500);
      });
  });
});

module.exports = router;
