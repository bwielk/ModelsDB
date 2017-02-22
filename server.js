var express = require('express');
var app = express();//initializes the app
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('./controllers'));

app.use(express.static('client/build'));

app.listen(3000, function() {
  console.log('App running on port ' + this.address().port);
});