var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require("mongoose");
var fdata = {};
var bodyParser = require("body-parser");
app.use( bodyParser.json() );
var mMail = require("../models/mailschema");
var requestify = require('requestify');
mongoose.connect('mongodb://localhost/myDatabase')
var db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.open('open', function(){console.log("Connection open");});

/* GET All mails. */
router.get('/allmails', function (req, res) {
  mMail.find({}, function(err, data){
    if (data == '')
      res.send("Not Found");
    else
      res.send(data);
    res.end();
  });
});

/* Post full details in body */
router.post('/add', function(req, res) {
    var  res1= new mMail(req.body);
    var mid = res1.id;

    mMail.find({id:mid}, function(err, data){
      if (data == '')
      {
        res1.save( function(err){
          if (err)
            res.send("Add Failed");
          res.send("Added to archeive");
          res.end();
        });
      }
      else{
        res.send("Mail is already archieved");
        res.end();
        }
    });
});

module.exports = router;
