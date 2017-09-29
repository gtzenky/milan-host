const express  = require('express');
const router = express.Router();
const League = require('./../models').League;

function isAdmin(req, res, next) {
  let user = req.user;
  if (user.isAdmin) {
    return next()
  } else {
    res.status(403);
    res.send("Forbidden");
  }
}

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

router.use(isLoggedIn);

  //get all league
  router.get('/league', isAdmin, (req, res) => {
    League.findAll()
      .then(leagues => {
        res.json(leagues)
      })
  });


  router.post('/league', isAdmin, (req, res) => {
    let league = req.body;
    League.upsert(league)
      .then(created => {
        res.send();
      })
  });

router.get('/league/match', (req, res) =>{
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
  ];
  res.json(matchs);
});

router.get('/me', function (req, res) {
  res.json(req.user)
});

module.exports = router;