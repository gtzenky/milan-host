const express = require('express');
const router = express.Router();

module.exports = function (app, passport) {

  // =====================================
  // LOGOUT ==============================
  // =====================================
  router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });

  router.get('/facebook', passport.authenticate('facebook', { scope: 'email' }));

  // handle the callback after facebook has authenticated the user
  router.get('/facebook/callback', passport.authenticate('facebook', {successRedirect: "/"}));

  return router;
};