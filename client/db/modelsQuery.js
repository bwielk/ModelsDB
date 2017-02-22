var MongoClient = require('mongodb').MongoClient;

var ModelsQuery = function(){
  this.url = 'mongodb://localhost:27017/models';
};

ModelsQuery.prototype = {//hits mongoClient, connects to the db, takes the db object and asks it to finds the collection
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db) {//err -error, db - when it connects
      var models = db.collection('runwayModels');//
      models.find().toArray(function(err, modelsDocs){
        onQueryFinished(modelsDocs);//we cannot return the files just like that because there are many level of callbacks and given that toArray takes too long, we need a callback
      }); //onQueryFinished is the link between the last tage of the callbacks and the beginning of the entire method
      //}
  });
  }
};

module.exports = ModelsQuery;

////this speak with the database to get the data