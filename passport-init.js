import { Strategy } from 'passport-local';
import { Client } from 'pg';
import config from './config';

module.exports = function(passport) {
  passport.serializeUser((user, done) => {
    console.log('serializing user: ', user, user.id);
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    console.log('deserializing user: ', id);
    
    const client = new Client(config.database.url);
    client.connect().then(() => {
      const query = 'SELECT * FROM r_user WHERE id = $1;';
      const params = [id];
      client.query(query, params)
        .then(results => {
          if(results.rowCount === 1) {
            done(null, results.rows[0]);
          } else {
            done('Invalid id');
          }
        })
        .catch(error => {
          done(error);
        });
      });
    });

  passport.use('login', new Strategy({ passReqToCallback: true },
    (request, username, password, done) => {
      const client = new Client(config.database.url);
      client.connect().then(() => {
        const query = 'SELECT * FROM r_user WHERE email_address = $1 AND password = $2;';
        const params = [username, password];
        client.query(query, params)
          .then(results => {
            if(results.rowCount === 1) {
              return done(null, results.rows[0]);
            } else if(results.rowCount === 0) {
              return done(null, false);
            } else {
              throw new Error('ERROR: multiple users with the same email address and password');
            }
          })
          .catch(error => {
            console.error('Unable to query database for a user');
            console.error(error);
            response.sendStatus(500);
          });
      });
    }
  ));
}