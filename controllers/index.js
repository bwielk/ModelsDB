var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/api/models', require('./models'));

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

router.get('/all', function(req, res){
  res.json({data: "All models"});
});

module.exports = router;
