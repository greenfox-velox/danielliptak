'use strict'

var http = require('http')

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var t = new Date;
  var currTime = t.getHours() +':'+t.getMinutes() +':'+ t.getSeconds();
  res.end(req.url + req.method +currTime);
});
server.listen(3000, '127.0.0.1');
