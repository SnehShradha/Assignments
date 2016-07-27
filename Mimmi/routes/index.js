var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var router = express.Router();
app.use( bodyParser.json() );

var myObj =
[{'id':1,'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'id':2,'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'id':3,'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'id':4,'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'id':5,'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'id':6,'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];


/* GET request page. */
router.get('/get/:empId', function (req, res, next) {
var id = parseInt(req.param('empId'));

  for(var i=0; i<myObj.length; i++){
    if (myObj[i].id==id){
         res.send(myObj[i]);
         res.end();
       }
     }
});
/* Post Request page. */

router.post('/post', function (req, res, next) {
  var newObj = {};
  newObj.id = req.body.id;
  newObj.name = req.body.name;
  newObj.age = req.body.age;
  newObj.occupation = req.body.occupation;
  myObj.push(newObj);
  var newObj = {};
  res.send(myObj);

});
/* Put Request page. */
router.put('/put', function (req, res, next) {
  myObj[5].id = req.body.id;
  myObj[5].name = req.body.name;
  myObj[5].age = req.body.age;
  myObj[5].occupation = req.body.occupation;

  res.send(myObj);
  res.end();
});
/* Delete Request page. */
router.delete('/delete', function (req, res, next) {
  res.send('Got a DELETE request at /user');
});
// //trying app.route
// router.route('/book')
//   .get(function(req, res) {
//     res.send('Get a random book');
//   })
//   .post(function(req, res) {
//     res.send('Add a book');
//   })
//   .put(function(req, res) {
//     res.send('Update the book');
//   });
//   //old code
// router.get('/ppt', function(req, res, next) {
//    var obj = {"name":"Amit", age:24};
//   res.send(JSON.stringify(obj));
// });

module.exports = router;
