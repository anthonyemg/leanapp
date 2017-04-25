var express = require('express');
var request = require('request');
var keys = require('./config.js');
var path = require('path');
var bodyParser = require('body-parser')

var app = express();

var food = 'apple';

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

app.get('/', function (req, res) {
  res.sendfile(path.join(__dirname + '/index.html'));
});

app.post('/', function(req, res){
  var options = {
    "method": "GET",
    "hostname": "api.nutritionix.com",
    "port": null,
    "path": "/v1_1/search/" + food + "?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=96694618&appKey=10971dfc0b8f2b77be22430d29ca46a3",
    "headers": {
      "cache-control": "no-cache",
      "postman-token": "f8287f8d-8143-cbf3-1f3b-6e051e756dec"
    }
  };
    var req = http.request(options, function (res) {
    var chunks = '';
    res.on("data", function (chunk) {
      chunks+=chunk;
    });
    res.on("end", function () {
      res.end(chucks.toString());
      console.log(body.toString());
    });
  });
})

app.get('*', function(req, res) {
  res.end('404');
});

app.listen(3000);
console.log('Listening on port 3000');

module.exports = app;





//
// request('https://api.nutritionix.com/v1_1/search/' + search + '?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=' + keys.appId + '&appKey=' + keys.appKey, function (error, response, body) {
// var data = JSON.parse(body)
// res.end(data.hits[0].fields.item_name + ' : ' + data.hits[0].fields.nf_calories.toString());
// });
