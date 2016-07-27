var express = require('express');
var path = require('path');//url of app
var users = require("./models/users");

var logger = require('morgan');//writes to git bash
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');//form fields body parse
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var connectFlash = require('connect-flash');
var routes = require('./routes/index');

var app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/',express.static(path.join(__dirname, '../Client/dist')));

app.use('/', routes);
passport.use(new Strategy(function(username, password, cb)
{
    users.findOne({"username": username}, function(err, user)
{
      if (err) { return cb(err); }
if (!user) {return cb(null, false); }
if (user.password != password) {return cb(null, false); }
return cb(null, user);
    });
  }));

  passport.serializeUser(function(user, done)
  {
      console.log('serializeUser');
    done(null, user.id);
  });



  passport.deserializeUser(function(id, done) {
    console.log("deserializeUser")
  users.findById(id, function(err, user) {
      done(err, user);
    });
  });

  app.use(cookieParser());
  app.use(require('express-session')({ secret: 'accesskey'}));

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(connectFlash());

  //authenticate users login
  app.post('/login',
    passport.authenticate('local',
  { failureFlash: 'Invalid Username and Password',
    successFlash: "Welcome to Movie App"}),
    function(req, res) {
      res.json({responseText:'authenticated'});
    });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



module.exports = app;
