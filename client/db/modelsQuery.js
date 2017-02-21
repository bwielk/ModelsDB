var MongoClient = require('mongodb').MongoClient;

var ModelsQuery = function(){
  this.url = 'mongodb://localhost:27017/models';
};



module.exports = ModelsQuery;