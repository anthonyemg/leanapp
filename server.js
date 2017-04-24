var http = require("https");

var options = {
  "method": "GET",
  "hostname": "api.nutritionix.com",
  "port": null,
  "path": "/v1_1/search/cheddar%20cheese?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=96694618&appKey=10971dfc0b8f2b77be22430d29ca46a3",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "c3b614cc-15a0-7397-add3-fd1108ee5c46"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
