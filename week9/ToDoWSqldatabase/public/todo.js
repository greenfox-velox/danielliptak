var counter = 0;

function createCheckbox(newtem, completedOrNot) {
  var div = document.createElement('div');
  div.classList.value = 'roundedTwo';
  newtem.appendChild(div);
  var newCheckbox = document.createElement('input');
  var newlabel = document.createElement('label');
  newCheckbox.setAttribute('id', String(counter));
  newlabel.setAttribute('for', String(counter++));
  newCheckbox.type = 'checkbox';
  newCheckbox.classList.value = 'roundedTwo';
  newCheckbox.checked = completedOrNot;
  div.appendChild(newCheckbox);
  div.appendChild(newlabel);
}

function addCheckBoxAndDelButt(newItem, completedOrNot) {
  var button = document.createElement('button');
  button.classList.value = 'deletebutton';
  newItem.appendChild(button);
  createCheckbox(newItem, completedOrNot);
}

function createToDoLine(oneToDo) {
  console.log(oneToDo);
  var newItem = document.createElement('li');
  newItem.textContent = oneToDo.text;
  newItem.id = 'i' + oneToDo.id;
  newItem.classList.value = 'todo-item';
  if (oneToDo.completed) {
    newItem.classList.add('checked');
  }
  document.querySelector('ul').appendChild(newItem);
  addCheckBoxAndDelButt(newItem, oneToDo.completed);
}

function drawTodo(todoList) {
  todoList.forEach(createToDoLine);
}

function xhrRequest(method, url, data, type, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.setRequestHeader(type, 'application/json');
  xhr.send(data);
  xhr.onload = function () {
    var readyState = xhr.readyState;
    if (readyState === 4) {
      cb(JSON.parse(xhr.response));
    } else {
      cb(JSON.parse(xhr.response));
    }
  };
}

function getToDoList() {
  var method = 'GET';
  var url = 'http://localhost:3000/todos';
  var getType = 'Accept';
  xhrRequest(method, url, {}, getType, function (response) {
    drawTodo(response);
  });
}

function add() {
  var sentence = document.querySelector('.rawText').value;
  var data = JSON.stringify({ text: String(sentence) });
  var method = 'POST';
  var addType = 'Content-Type';
  var addUrl = 'http://localhost:3000/todos';
  xhrRequest(method, addUrl, data, addType, function (response) {
    createToDoLine(response);
  });
}

function remove(id) {
  var removeUrl = 'http://localhost:3000/todos/' + id.substring(1, id.length);
  var removeType = 'Accept';
  var method = 'DELETE';
  xhrRequest(method, removeUrl, {}, removeType, function (response) {
    var todoList = document.querySelector('ul');
    todoList.removeChild(document.querySelector('#' + id));
  });
}

function makeDone(event) {
  var sentenceText = event.target.parentNode.parentNode.textContent;
  var id = event.target.parentNode.parentNode.id;
  var data = JSON.stringify({ text: String(sentenceText), completed: true });
  var method = 'PUT';
  var typeMakeDone = 'Content-Type';
  var putUrl = 'http://localhost:3000/todos/' + id.substring(1, id.length);
  xhrRequest(method, putUrl, data, typeMakeDone, function (response) {
   console.log(response);
  });
}

function dealToDo(event) {
  console.log(event);
  if (event.target.className === 'deletebutton') {
    remove(event.target.parentNode.id);
  } else if (event.target.className === 'roundedTwo') {
    makeDone(event);
  }
}
var listHolder = document.querySelector('ul');
listHolder.addEventListener('click', dealToDo);

var button = document.querySelector('button');
button.addEventListener('click', add);

getToDoList();
