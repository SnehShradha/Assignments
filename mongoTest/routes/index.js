var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var fdata = {};
var User = require("../models/studentschema");
mongoose.connect('mongodb://localhost/myDatabase')
var db = mongoose.connection;

/* GET home page. */
router.get('/', function(req, res, next) {
  db.on("error", console.error.bind(console, "Connection Error:"));
  db.open('open', function(){
    User.find({city:"Bangalore"}, function(err, data){
      fdata = data;
      console.log(fdata);
    });
    res.send(fdata);
  });
});

module.exports = router;
