import express from 'express';

const router = express.Router();

module.exports = function(passport) {

  // router.post('/login', (request, response) => {  
  //   const emailAddress = request.body.username;
  //   const password = request.body.password;

  //   console.log(emailAddress, password);
  // });

  // router.post('/login', passport.authenticate('login'),
  // (request, response) => {
  //   response.sendStatus(200);
  // });

  router.post('/login', function(req, res, next) {
    passport.authenticate('login', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.sendStatus(403); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.sendStatus(200);
      });
    })(req, res, next);
  });

  return router;
}
