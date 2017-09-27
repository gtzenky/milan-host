

module.exports = (app) => {
  var express  = require('express');
  var router = express.Router();


  router.post('/api/league', (req, res) => {
    let user = req.user;
    if (user.isAdmin) {

    } else {
      res.status(403);
      res.send("Forbidden")
    }
  });

  app.use('/', router)
}