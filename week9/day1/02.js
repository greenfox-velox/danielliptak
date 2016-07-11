'use strict'

var express = require('express');
var app = express();

var t = new Date;
var currTime = t.getHours() +':'+t.getMinutes() +':'+ t.getSeconds();

app.get('/:foo', function(req, res) {
  res.send(req.params.foo + req.method + currTime);
});

app.listen(3000);
