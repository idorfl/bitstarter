var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var buf = fs.readFileSync('index.html');
var strIndex = buf.toString();

app.get('/', function(request, response) {
  response.send(strIndex);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
