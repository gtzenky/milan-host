// app/models/user.js
// load the things we need
var bcrypt   = require('bcrypt-nodejs');

// create the model for users and expose it to our app
module.exports = {

  findById : (id, done) => {
    done(null, {
      name: 'Thong'
    });
  },

  findOne : (facebookid, done) => {
    done(null);
  }
}