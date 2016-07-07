
  // var sentence = document.querySelector('.rawText').value
var xhr = new XMLHttpRequest();
xhr.onload = function () {
  var todoList = JSON.parse(xhr.response)
  todoList.forEach(function(item){
    var newItem = document.createElement('li');
    newItem.textContent = item['text'];
    document.querySelector('ul').appendChild(new_item);
  })
};
xhr.open('GET', 'https://mysterious-dusk-8248.herokuapp.com/todos', true);
xhr.send();


var button = document.querySelector('button');
//button.addEventListener('click', Translate);
