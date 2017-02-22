var express = require('express');
var app = express();
var modelsRouter = express.Router();

var ModelsQuery = require('../client/db/modelsQuery');
var query = new ModelsQuery();

modelsRouter.get('/', function(req, res){
  query.all(function(results){
    res.json(results);
  });
});

module.exports = modelsRouter;