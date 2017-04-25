var express = require('express');
var request = require('request');
var keys = require('./config.js');
var path = require('path');
var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

app.get('/', function (req, res) {
  res.sendfile(path.join(__dirname + '/index.html'));
});

app.post('/', function(req, res){
  console.log('Food prepped for API')
  var food = req.body.data;
  console.log('API requests ', food);

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









//
// app.post('/', function(req, res){
//   console.log('Food prepped for API')
//   var food = req.body.data;
//   console.log('API requests ', food);
//   var options = {
//     "method": "GET",
//     "hostname": "api.nutritionix.com",
//     "port": null,
//     "path": "/v1_1/search/" + food + "?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=" + keys.appID + "&appKey=" + keys.appKey,
//     "headers": {
//       "cache-control": "no-cache",
//       "postman-token": "f8287f8d-8143-cbf3-1f3b-6e051e756dec"
//     }
//   };
//     var req = http.request(options, function (res) {
//     var chunks = '';
//     res.on("data", function (chunk) {
//       chunks+=chunk;
//     });
//     res.on("end", function () {
//       console.log('woooooooooo ',data.hits[0].fields.item_name);
//       res.end(chucks.toString());
//     });
//   });
// })
