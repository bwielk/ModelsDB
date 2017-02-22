var Models = function(){};

Models.prototype = {
  makeRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  },
  
  all: function(callback){
    this.makeRequest("http://localhost:3000/api/models", function(){
      if(this.status !== 200) return;
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);

      callback(results);
    });
  }
};

module.exports = Models;


///this speaks with the front end // API!