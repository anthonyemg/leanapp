var express = require('express');
var request = require('request');
var keys = require('./config.js');

var app = express();

var search = 'cheese';
// app.get('/', function (req, res) {
//   res.sendfile('./index.html');
// });
//
// app.get('*', function(req, res) {
//   res.end('404');
// });

app.get('/', function(req, res){
  request('https://api.nutritionix.com/v1_1/search/' + search + '?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=' + keys.appId + '&appKey=' + keys.appKey, function (error, response, body) {
  var data = JSON.parse(body)
  res.end(data.hits[1].fields.nf_calories.toString());
  });
})

app.listen(3000);
console.log('Listening on port 3000');

module.exports = app;
