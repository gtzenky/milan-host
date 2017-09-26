// app/routes.js

const path = require('path');

module.exports = function (app, passport) {

  // =====================================
  // HOME PAGE (with login links) ========
  // =====================================
  app.get('/login', function (req, res) {
    res.render('login.ejs'); // load the index.ejs file
  });

  // =====================================
  // LOGIN ===============================
  // =====================================
  // show the login form
  // app.get('/login', function (req, res) {

  //   // render the page and pass in any flash data if it exists
  //   res.render('login.ejs', { message: req.flash('loginMessage') });
  // });

  // process the login form
  // app.post('/login', do all our passport stuff here);

  // =====================================
  // SIGNUP ==============================
  // =====================================
  // show the signup form
  // app.get('/signup', function (req, res) {

  //   // render the page and pass in any flash data if it exists
  //   res.render('signup.ejs', { message: req.flash('signupMessage') });
  // });

  // process the signup form
  // app.post('/signup', do all our passport stuff here);

  // =====================================
  // PROFILE SECTION =====================
  // =====================================
  // we will want this protected so you have to be logged in to visit
  // we will use route middleware to verify this (the isLoggedIn function)

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
    passport.authenticate('facebook'), function(req, res) {
      res.send(req.user);
    });

  app.get('/api/me', function (req, res) {
    if (req.isAuthenticated()) {
      res.json(req.user);
    } else {
      res.status(302);
      res.send("Need Login")
    }
  });

};



// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on 
  if (req.isAuthenticated()) {
    console.log(`Authenticated - user: ${JSON.stringify(req.user)}.`);
    return next();
  } else {
    // if they aren't redirect them to the home page
    console.log('Redirect to /login.');
    res.redirect('/login');
  }
}