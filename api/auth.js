import express from 'express';

const router = express.Router();

module.exports = function(passport) {

  // router.post('/login', (request, response) => {  
  //   const emailAddress = request.body.username;
  //   const password = request.body.password;

  //   console.log(emailAddress, password);
  // });

  router.post('/login', 
    passport.authenticate('login', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    });

  return router;
}
