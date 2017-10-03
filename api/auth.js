import express from 'express';
const router = express.Router();

module.exports = function(passport) {
  router.post('/auth/login', passport.authenticate('login'));

  return router;
}