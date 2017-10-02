// server.js

// set up ======================================================================
// get all the tools we need
const express = require('express');
const passport = require('passport');
const flash = require('connect-flash');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const healthcheck = require('express-healthcheck');
const nocache = require('nocache');

const configPassport = require('./config/passport');

const authRoute = require('./app/auth-route.js');
const leagueRouter = require('./app/league/league-route.js');

const app = express();

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

// healthcheck
app.use('/healthcheck', healthcheck());

// required for passport

configPassport(passport); // pass passport for configuration
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================

// load our routes and pass in our app and fully configured passport
const authRouter = authRoute(app, passport);
authRouter.use(nocache());
app.use('/auth', authRouter);

leagueRouter.use(nocache());
app.use('/api', leagueRouter);

// static files ===============================================================
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// launch ======================================================================
const port = process.env.PORT || 3000;
app.listen(port);
console.log('The magic happens on port ' + port);