var Models = require('../models/models');

var UI = function(){
  var models = new Models();
  models.all(function(result) {
    this.render(result);
  }.bind(this));
}

UI.prototype = {
  appendText: function(element, text, label) {
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  render: function(models){
    var container = document.getElementById('models');

    for(var model of models){
      var li = document.createElement('li');
      this.appendText(li, model.name, 'Name: ');
      this.appendText(li, model.status, 'Status: ');
      container.appendChild(li);
    }
  }
}

module.exports = UI;