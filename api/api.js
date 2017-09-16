import express from 'express';
import { Client } from 'pg';
import config from '../config';

export default api => {

  api.get('/api/blog', (request, response) => {
    const client = new Client(config.database.url);
    client.connect().then(() => {
      client.query('SELECT * FROM blog;')
        .then(results => {
          response.send({ data: results.rows });
        });
    });
  });

}
