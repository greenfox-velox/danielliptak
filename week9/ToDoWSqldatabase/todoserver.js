'use strict';

var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
// var winston = require('winston');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./public'));

var con = mysql.createConnection({
  host: 'localhost',
  user: "'root'",
  password: 'almafa',
  database: 'todo',
});


app.get('/todos', function (req, res, next) {
  con.query('SELECT * FROM ToDO;',function(err, rows){
    if (err || rows.length === 0) {
      next();
      return;
    }
    res.send(rows);
  });
});

app.get('/todos/:id', function (req, res, next) {
  con.query('SELECT * FROM ToDO WHERE id = ' + req.params.id + ';',function(err, rows){
    if (err || rows.length === 0) {
      next();
      return;
    }
    res.send(rows);
  });
});

app.post('/todos', function(req, res){
  con.query('INSERT into ToDO (text) VALUES ("'+ req.body.text +'");',
  function (err, row) {
    if (err) {
      res.sendStatus(404);
    }
    req.body.id = row.insertId;
    res.send(req.body);
  });
});

app.put('/todos/:id', function(req, res){
  con.query('Update ToDO SET completed = ' + req.body.completed + ', text = "' + req.body.text + '" WHERE id = ' + req.params.id + ';',
  function (err, row) {
    if (err) {
      res.status(404);
    }
    req.body.id = req.params.id;
    res.send(req.body);
  });
})

app.delete('/todos/:id', function(req, res){
  con.query('Delete from ToDO Where id =' + req.params.id + ';',
  function (err, row) {
    if (err) {
      console.log(err.toString());
      return;
    }
    req.body.id = row.insertId;
    res.send(row);
  });
});

app.listen(3000);

app.use(function(req, res, next) {
  res.send([{ "text": "BEERTIME" }]);
});
