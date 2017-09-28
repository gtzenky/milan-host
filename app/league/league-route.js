
var League = require('./../models').League;

module.exports = (app) => {
  var express  = require('express');
  var router = express.Router();


  //get all league
  router.get('/api/league', isAdmin, (req, res) => {
    League.findAll()
      .then(leagues => {
        res.json(leagues)
      })
  });


  router.post('/api/league', isAdmin, (req, res) => {
    let league = req.body;
    League.upsert(league)
    res.send();
  });

  router.get('/api/league/match', (req, res) =>{
    matchs = [
      {
        id : 1,
        round: 1,
        home : "AC Milan",
        away : "Juventus",
        startTime: new Date()
      },
      {
        id : 2,
        round: 2,
        home : "Fiorentina",
        away : "AC Milan",
        startTime: new Date()
      }
    ]
    res.json(matchs);
  }) 

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