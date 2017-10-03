import { Strategy } from 'passport-local';

module.exports = function(passport) {
  passport.serializeUser((user, done) => {
    console.log('serializing user: ', user);
    done(null, user);
  });

  passport.deserializeUser((id, done) => {
    console.log('deserializing user: ', id);
    done(null, id);
  });

  passport.use('login', new Strategy({ passReqToCallback: true },
    (request, username, password, done) => {
      console.log('yayayyayayay');
      console.log(username);
      console.log(password);
    }
  ));
}