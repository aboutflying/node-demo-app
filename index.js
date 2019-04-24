var express = require('express');
var app = express();
var exec = require('child_process').exec;

app.get('/', function (req, res) {
  var child = exec("hostname",
  function (error, stdout, stderr) {
     var hostname = JSON.stringify(stdout).replace(/"/g, "").replace(/\\n/g, "");
     res.send('Aloha from ' + hostname + '!!');
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
});
