const express  = require('express');
const router = express.Router();
const League = require('./../models').League;
const Match = require('./../models').Match;
const VoteResult = require('./../models').VoteResult;
const Setting = require('./../models').Setting;

const ACTIVE_MATCH = "active.match";

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
  let leagueId = req.query.leagueId;
  Match.findAll({
    where: {
      leagueId: leagueId
    }
  }).then(matchs => {
    res.json(matchs);
  })
});

router.post('/league/match', (req, res) =>{
  let match = req.body
  if (!match.matchResult) {
    match.matchResult = null;
  } 
  Match.upsert(match)
  .then(created => {
    res.send();
  })
});

router.post('/league/match/active', (req, res) =>{
  let data = req.body
  if (data.matchId) {
    let setting = {
      key: ACTIVE_MATCH,
      value: data.matchId
    }
    Setting.findOne({
      where: {
        key: ACTIVE_MATCH
      }
    }).then(result => {
      if (!result) {
        return Setting.create(setting);
      } else {
        return result.update(setting);
      }
    })
  } 
});

router.get('/me', function (req, res) {
  res.json(req.user)
});

router.get('/vote', (req, res) =>{
  let now = new Date();
  Match.findOne({
    where: {
      startTime: {}
    }
  })
});

module.exports = router;