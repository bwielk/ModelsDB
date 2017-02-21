var express = require('express');
var app = express();
var modelsRouter = express.Router();

var ModelsQuery = require('../client/db/modelsQuery');
var query = new ModelsQuery();



module.exports = modelsRouter;