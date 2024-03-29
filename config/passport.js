// config/passport.js

// load all the things we need
// var LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

// load up the user model
const User = require('../app/models').User;

// load the auth variables
const configAuth = require('./auth');

module.exports = function (passport) {

  // used to serialize the user for the session
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function (id, done) {
    User.findById(id)
      .then(user => done(null, user));
  });

  // code for login (use('local-login', new LocalStategy))
  // code for signup (use('local-signup', new LocalStategy))

  // =========================================================================
  // FACEBOOK ================================================================
  // =========================================================================
  passport.use(new FacebookStrategy({

    // pull in our app id and secret from our auth.js file
    clientID: configAuth.facebookAuth.clientID,
    clientSecret: configAuth.facebookAuth.clientSecret,
    callbackURL: configAuth.facebookAuth.callbackURL,
    profileFields: ['displayName','email','link','picture'] 

  },

    // facebook will send back the token and profile
    function (token, refreshToken, profile, done) {

      // asynchronous
      process.nextTick(function () {

        // find the user in the database based on their facebook id
        User.findOne({ where: {email: profile.emails[0].value} }).then(user => {
          if (!user) {
            User.create({
              email : profile.emails[0].value,
              fullName: profile.displayName,
              isAdmin: false,
              picture: profile.photos[0].value
            }).then(user => done(null, user));
          } else {
            user.update({
              email : profile.emails[0].value,
              fullName: profile.displayName,
              isAdmin: false,
              picture: profile.photos[0].value
            }).then(user => done(null, user));
          }

        });
      });

    }));

};