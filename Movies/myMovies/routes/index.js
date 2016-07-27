var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require("mongoose");
var fdata = {};
var bodyParser = require("body-parser");
app.use( bodyParser.json() );
var mMovie = require("../models/movieschema");
var requestify = require('requestify');
mongoose.connect('mongodb://localhost/myDatabase')
var db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.open('open', function(){console.log("Connection open");});

//authication layer
function isLoggedIn (req, res, next) {
  if(req.isAuthenticated()){
  return next();}
  else {
    res.json('not authenticated');
  }
};

/* GET All movie. */
router.get('/allmovies', function (req, res) {
  mMovie.find({},function(err, data){
    if (err)
      res.send(err);
    res.send(data);
    res.end();
  });
});

/* GET Single movie. */
router.get('/search/:id', function (req, res) {
  var id = req.param('id');
  mMovie.find({imdbID:id}, function(err, data){
    if (data == '')
      res.send("Not Found");
    else
      res.send(data);
    res.end();
  });
});

/* Post full details in body */
router.post('/add', function(req, res) {
    var  res1= new mMovie(req.body);
    var mid = res1.imdbID;

    mMovie.find({imdbID:mid}, function(err, data){
      if (data == '')
      {
        res1.save( function(err){
          if (err)
            res.send("Add Failed");
          res.send(res1.Title+" movie  record Inserted");
          res.end();
        });
      }
      else{
        res.send(res1.Title+"Movie already in collection");
        res.end();
        }
    });
});

/* Put Request page. */
router.put('/modify/:id/:val', function (req, res) {
  var id = req.param('id');
  var val = req.param('val');

  mMovie.findOneAndUpdate({ imdbID : id },{ Year: val },function (err,data) {
    if(err)
      res.send("Update Failed");
    res.send("Update Successful");
    res.end();
    });

  });

  /* Delete Request */
  router.delete('/delete/:id', function (req, res) {
    var id = req.param('id');

    mMovie.remove( { imdbID : id },function(err, result) {
      if(err)
        res.send("Unable to delete");
      res.send("Deleted  sucessfully");
      res.end();
    });

  });

  module.exports = router;
