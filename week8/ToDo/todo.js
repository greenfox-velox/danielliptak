
  // var sentence = document.querySelector('.rawText').value
var xhr = new XMLHttpRequest();
xhr.onload = function () {
  var todoList = JSON.parse(xhr.response);
  todoList.forEach(function(item){
    var newItem = document.createElement('li');
    newItem.textContent = item['text'];
    document.querySelector('ul').appendChild(newItem);
  });
};
xhr.open('GET', 'https://mysterious-dusk-8248.herokuapp.com/todos', true);
xhr.send();



function add() {
  var xhr2 = new XMLHttpRequest();
  xhr2.open('POST', 'https://mysterious-dusk-8248.herokuapp.com/todos', true);
  xhr2.setRequestHeader('Content-Type', 'application/json');
  xhr2.send(JSON.stringify({ text: 'Kill John Rambo' }));
}

var button = document.querySelector('button');
button.addEventListener('click', add);
