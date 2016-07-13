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
      return;
    }
    res.send(rows);
  });
});

// app.get('/todos/:id', function (req, res, next) {
//   var num = todos.findIndex(function(item) { return item.id === +req.params.id });
//   if (num < 0) {
//     return next(404);
//   }
//   res.send(todos[num]);
// });

app.post('/todos', function(req, res){
  con.query('INSERT into ToDO (text) VALUES ("'+ req.body.text +'");',
  function (err, row) {
    if (err) {);
      return;
    }
    req.body.id = row.insertId;
    res.send(req.body);
  });
});

// app.put('/todos/:id', function(req, res){
//   var todo = todos.filter((e) => e.id === +req.params.id)[0];
//   todo.completed = req.body.completed;
//   todo.text = req.body.text;
//   res.send(todo);
// })
//

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

app.use(function(err, req, res, next) {
   res.status(404);
});
