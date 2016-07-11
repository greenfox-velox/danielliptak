'use strict'

var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use('/', express.static('public'))

app.use(function(err, req, res, next) {
   res.status(404);
});

// HTTP/1.1 404 Not Found
// X-Powered-By: Express
// Content-Type: application/json; charset=utf-8
// Content-Length: 26
// ETag: W/"1a-k6qNFtmn7O8atwPHaaY6DA"
// Date: Sat, 09 Jan 2016 18:29:55 GMT
// Connection: keep-alive

var todos = [
    {
        "completed": false,
        "id": 1,
        "text": "Buy milk"
    },
    {
        "completed": false,
        "id": 2,
        "text": "Make dinner"
    },
    {
        "completed": false,
        "id": 3,
        "text": "Save the world"
    }
];

app.get('/todos', function(req, res) {
  res.send(todos);
});

app.get('/todos/:id', function(req, res){
  res.send(todos.filter(item => item.id === +req.params.id));
});

app.post('/todos', function(req, res){
  req.body.id = todos.length+1;
  req.body.completed = false;
  todos.push(req.body);
  res.send(todos[todos.length-1]);
})

app.put('/todos/:id', function(req, res){
  var todo = todos.filter((e) => e.id === +req.params.id)[0];
  todo.completed = req.body.completed;
  todo.text = req.body.text;
  res.send(todo);
})

app.delete('/todos/:id', function(req, res){
 var newtodo = todos.filter(function (e){
     return e.id !== +req.params.id
 });
 var filtered = todos.filter(function (e){
     return e.id === +req.params.id
 })[0];
 filtered["destroyed"] = true;
 res.json(filtered);
 todos = newtodo;
});

app.listen(3000);
