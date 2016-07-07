var url = 'https://mysterious-dusk-8248.herokuapp.com/todos';

function addCheckBox() {
  var todoline = document.querySelectorAll('li');
  for (var i = 0; i < todoline.length; i++) {
    var newCheckbox = document.createElement('input');
    var button = document.createElement('button');
    newCheckbox.type = 'checkbox';
    button.classList.value = 'deletebutton';
    todoline[i].appendChild(button);
    todoline[i].appendChild(newCheckbox);
  }
}

function drawTodo(response) {
  var todoList = JSON.parse(response);
  todoList.forEach(function (item, index, object) {
    var newItem = document.createElement('li');
    newItem.textContent = item.text;
    newItem.id = item.id;
    console.log(newItem.id);
    document.querySelector('ul').appendChild(newItem);
  });
  addCheckBox();
}

function xhrRequest(method, url, data, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(data);
  xhr.onload = function () {
    var status = xhr.status;
    if (status === 200) {
      cb(xhr.response);
    } else {
      console.log('Something happend');
    }
  };
}


function getToDoList() {
  var method = 'GET';
  xhrRequest(method, url, {}, function(response) {
    console.log(response);
    drawTodo(response);
  });
}

function add() {
  var sentence = document.querySelector('.rawText').value;
  var data = JSON.stringify({ text: String(sentence) });
  var method = 'POST';
  xhrRequest(method, url, data, function (response) {
    drawTodo(response);
  });
}

var button = document.querySelector('button');
button.addEventListener('click', add);

getToDoList();
//
// function remove() {
//   var xhrRemove = new XMLHttpRequest();
//   xhrRemove.open('DELETE', 'https://mysterious-dusk-8248.herokuapp.com/todos/', true);
//   xhrRemove.send();
// }
//
// var label = document.querySelector('.checkbox');
// label.addEventListener('click', remove)
