'use strict';

var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./public'));

var con = mysql.createConnection({
  host: 'localhost',
  user: "'root'",
  password: '',
  database: 'todo',
});

// HTTP/1.1 404 Not Found
// X-Powered-By: Express
// Content-Type: application/json; charset=utf-8
// Content-Length: 26
// ETag: W/'1a-k6qNFtmn7O8atwPHaaY6DA'
// Date: Sat, 09 Jan 2016 18:29:55 GMT
// Connection: keep-alive

app.get('/todos', function (req, res) {
  con.query('SELECT * FROM ToDO;',function(err, rows){
    if (err) {
      res.status(404);
    }
    res.send(rows);
  });
});

app.get('/todos/:id', function (req, res) {
  con.query('SELECT * FROM ToDO WHERE id = ' + req.params.id + ';',function(err, rows){
    if (err) {
      res.sendStatus(404);
      return
    }
    res.send(rows);
  });
});

app.post('/todos', function(req, res){
  con.query('INSERT into ToDO (text) VALUES ("'+ req.body.text +'");',
  function (err, row) {
    if (err) {;
      return;
    }
    req.body.id = row.insertId;
    res.send(req.body);
  });
});

app.put('/todos/:id', function(req, res){
  con.query('Update ToDO SET completed = ' + req.body.completed + ', text = "' + req.body.text + '" WHERE id = ' + req.params.id + ';',
  function (err, row) {
    if (err) {
      console.log(err.toString());
      return;
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

// app.use(function(err, req, res, next) {
//    res.status(404);
// });
