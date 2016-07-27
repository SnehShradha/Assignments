var express = require('express')
var app = express();


app.get('/',function (req,res){
  res.send("I am inside the route");
  console.log("I am inside the route");
});
app.listen(8080,function(err){
  console.log("Server Started");
});
console.log("Hi you have reached the end of the program");
