

module.exports = (app) => {
  var express  = require('express');
  var router = express.Router();


  router.get('/api/league', isAdmin, (req, res) => {
    let leagues = [{
      id:1,
      name: "serie A",
      description: "2016-2017"
    },
    {
      id:2,
      name: "Premier",
      description: "2017-2018"
    }];

    res.json(leagues);
  });

  app.use('/', router)
}

isAdmin = (req, res, next) => {
  let user = req.user;
  if (user.isAdmin) {
    return next()
  } else {
    res.status(403);
    res.send("Forbidden")
  }
}