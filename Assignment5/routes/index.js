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
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Movies' });
});
/* GET All movies page. */
router.get('/allmovies', function(req, res, next) {
  mMovie.find({},function(err, data){
    res.send(data);
  });
});
/* GET Search page. */
router.get('/search/:movie', function (req, res) {
  var id = req.param('movie');
  mMovie.find({Title:id}, function(err, data){res.send(data);});
});
/* Post by movie name page. */
router.post('/add/:movie', function(req, res, next) {
  var id = req.param('movie');
  //make call to omdb
  requestify.get('http://www.omdbapi.com/?t='+id+'&y=&plot=short&r=json')
  .then(function(response) {
    // Get the response body (JSON parsed or jQuery object for XMLs)
    var  res1= new mMovie(response.getBody());
    // Insert the details in DB
    res1.save( function(err){
      if (err)
      console.log(err);
      res.send(res1.Title+" movie  record Inserted");
      res.end();
    });//save
  });//requestify
});
/* Put Request page. */
router.put('/modify/:movieName/:propertyToChange/:value', function (req, res, next) {
  var movNm = req.param('movieName');
  var prop = req.param('propertyToChange');
  var val = req.param('value');
//  mMovie.findOneAndUpdate({ "Title" : movNm }, { mMovie[prop] : val } );
  mMovie.findOne({ "Title" : movNm }, function(err, data) {
      data[prop] = val;
    //save
    data.save(function(err) {
      res.send("Updated");
    });
  });
  });
  //update
router.put('/update/:id', function(req, res) {
  mMovie.findOne({ Title: req.param.id}, function(err, data) {
    if(err) {
      return res.send("Movie id not exist, not able to update");
    }

    for(prop in req.body) {
      console.log(req.body[prop]);
      data[prop] = req.body[prop];
      console.log(data[prop]);
    }
    //save
    data.save(function(err) {
      if(err) {
        return res.send("not able to save");
      }
      res.send(data);
    });
  });
});
  /* Delete Request page. */
  router.delete('/delete/:movieName', function (req, res, next) {
    var movNm = req.param('movieName');
    mMovie.remove( { Title : movNm },function(err, result) {
      res.send("Deleted  "+movNm);
    });
  });
  module.exports = router;
  //  db.collection('movies').deleteOne({ "Title": movNm },function(err, results) { //Output lines});
