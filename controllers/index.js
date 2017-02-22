var express = require('express');//doesnt' start a new server, just requires the dependency
var router = express.Router();
var path = require('path');//let's us access files in the tree dependecy

router.use('/api/models', require('./models'));//the router '/api/models' uses the routes and everything that is imported from controllers

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/../client/build/index.html')); //lead the systempath to index.html
});

// router.get('/all', function(req, res){
//   res.json({data: "All models"});
// });

module.exports = router;


//express is a server. It manages requests and Express responses to them. Our codes helps it to deal with the requests 