var express = require('express');
var modelsRouter = express.Router(); //creates a router thatt deals with all the requests
var ModelsQuery = require('../client/db/modelsQuery');

modelsRouter.get('/', function(req, res){//that comes from the client(browser)
  var query = new ModelsQuery();
  query.all(function(results){
    res.json(results);//take the docs and turn into a readible format
  });
})

  modelsRouter.get('/:id', function(req, res){
    query.all(function(docs){
      res.json(docs[req.params.id]);
  });
});

module.exports = modelsRouter;