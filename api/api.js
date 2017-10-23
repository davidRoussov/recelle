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
  const firstName = data.userInputsFirstName;
  const lastName = data.userInputsLastName;
  const emailAddress = data.userInputsEmailAddress;
  const password = data.password;

  checkValidUser(firstName, lastName, emailAddress, password)
    .then(() => createNewUser(firstName, lastName, emailAddress, password))
    .then(() => {
      console.info(`Successfully created new user: ${firstName} ${lastName} ${emailAddress}`);
      response.status(201).send({ success: true });
    })
    .catch(message => {
      console.error('Error creating new user');
      console.error(message);
      response.status(400).send({ message });
    });
});

module.exports = router;

function checkValidUser(firstName, lastName, emailAddress, password) {
  return new Promise((resolve, reject) => {
    const client = new Client(config.database.url);
    client.connect()
      .then(() => {
        const query = 'SELECT * from r_user WHERE email_address = $1';
        client.query(query, [emailAddress])
          .then(results => {
            if(results.rowCount === 0) {
              resolve();
            } else {
              reject('A user with that email address already exists');
            }
          })
          .catch(error => {
            console.error('Unable to execute Postgres query');
            console.error(error);
            reject('A database error occurred');
          });
      })
      .catch(error => {
        console.error('Unable to connect to Postgres');
        console.error(error);
        reject('A database error occurred');
      });
  });
}

function createNewUser(firstName, lastName, emailAddress, password) {
  return new Promise((resolve, reject) => {
    const client = new Client(config.database.url);
    client.connect().then(() => {
      const query = `
        INSERT INTO r_user (first_name, last_name, email_address, password)
        VALUES ($1, $2, $3, $4);
      `;
      const params = [firstName, lastName, emailAddress, password];
  
      client.query(query, params)
        .then(results => {
          resolve();
        })
        .catch(error => {
          console.error('Unable to execute Postgres query');
          console.error(error);
          reject('A database error occurred');
        });
    })
    .catch(error => {
      console.error('Unable to connect to Postgres');
      console.error(error);
      reject('A database error occurred');
    });
  });
}
