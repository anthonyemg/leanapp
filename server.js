var express = require('express');
var request = require('request');
var keys = require('./config.js');
var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.post('/', function(req, res){
  var food = req.body.data;
  request('https://api.nutritionix.com/v1_1/search/' + food + '?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=' + keys.appId + '&appKey=' + keys.appKey, function (error, response, body) {
  var data = JSON.parse(body)
  res.end(data.hits[0].fields.item_name + ' : ' + data.hits[0].fields.nf_calories.toString());
  })
});

app.get('*', function(req, res) {
  res.end('404');
});

app.listen(3000);
console.log('Listening on port 3000');

module.exports = app;
