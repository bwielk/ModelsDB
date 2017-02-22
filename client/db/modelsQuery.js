var MongoClient = require('mongodb').MongoClient;

var ModelsQuery = function(){
  this.url = 'mongodb://localhost:27017/models';
};

ModelsQuery.prototype = {
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db) {
      var collection = db.collection('models');
      collection.find().toArray(function(err, docs){
        onQueryFinished(docs);
      });
    });
  }
};

module.exports = ModelsQuery;

////this speak with the database to get the data