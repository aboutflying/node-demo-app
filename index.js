var express = require('express');
var app = express();
var exec = require('child_process').exec;
var child;

app.get('/', function (req, res) {
  child = exec("hostname",
  function (error, stdout, stderr) {
     var hostname = JSON.stringify(stdout).replace(/"/g, "");
     res.send('Hello from ' + hostname + '!');
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
});
