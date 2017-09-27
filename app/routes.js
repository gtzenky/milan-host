// app/routes.js

const path = require('path');

module.exports = function (app, passport) {

  // =====================================
  // LOGOUT ==============================
  // =====================================
  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });

  app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

  // handle the callback after facebook has authenticated the user
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {successRedirect: "/"}));

  app.get('/api/me', function (req, res) {
    if (req.isAuthenticated()) {
      res.json(req.user);
    } else {
      res.status(302);
      res.send("Need Login")
    }
  });


  app.use('/api', isLoggedIn);
};



// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on 
  if (req.isAuthenticated()) {
    console.log(`Authenticated - user: ${JSON.stringify(req.user)}.`);
    return next();
  } else {
    // if they aren't redirect them to the home page
    res.status(401);
    res.send("Unauthorized");
  }
}