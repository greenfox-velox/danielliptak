function createCheckbox(newItem) {
  var counter = 0;
  var div = document.createElement('div');
  div.classList.value = 'roundedTwo';
  newItem.appendChild(div);
  var newCheckbox = document.createElement('input');
  var newlabel = document.createElement('label');
  newCheckbox.setAttribute('id', String(counter));
  newlabel.setAttribute('for', String(counter));
  counter += 1;
  newCheckbox.type = 'checkbox';
  newCheckbox.classList.value = 'roundedTwo';
  div.appendChild(newCheckbox);
  div.appendChild(newlabel);
}

function addCheckBox(newItem) {
  var button = document.createElement('button');
  button.classList.value = 'deletebutton';
  newItem.appendChild(button);
  createCheckbox(newItem);
}

function drawTodo(response) {
  var todoList = JSON.parse(response);
  todoList.forEach(function (item, index, object) {
    var newItem = document.createElement('li');
    newItem.textContent = item.text;
    newItem.id = 'i' + item.id;
    newItem.classList.value = 'todo-item';
    console.log(newItem.id);
    document.querySelector('ul').appendChild(newItem);
    addCheckBox(newItem);
  });
}

function xhrRequest(method, url, data, type, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.setRequestHeader(type, 'application/json');
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
  var url = 'https://mysterious-dusk-8248.herokuapp.com/todos';
  var getType = 'Accept';
  xhrRequest(method, url, {}, getType, function(response) {
    drawTodo(response);
  });
}

function add() {
  var sentence = document.querySelector('.rawText').value;
  var data = JSON.stringify({ text: String(sentence) });
  var method = 'POST';
  var addType = 'Content-Type';
  var addUrl = 'https://mysterious-dusk-8248.herokuapp.com/todos';
  xhrRequest(method, addUrl, data, addType, function (response) {
    null;
  });
}

function remove(id) {
  console.log(id);
  var removeUrl = 'https://mysterious-dusk-8248.herokuapp.com/todos/' + id.substring(1,id.length);
  var removeType = 'Accept';
  var method = 'DELETE';
  xhrRequest(method, removeUrl, {}, removeType,
    function (response) {
    var todoList = document.querySelector('ul');
    todoList.removeChild(document.querySelector('#'+id));
  });
}

function makeDone(event) {
  var sentenceText = event.target.parentNode.innerText;
  var id = event.target.parentNode.parentNode.id;
  var data = JSON.stringify({ text: String(sentenceText), completed: true });
  var method = 'PUT';
  var typeMakeDone = 'Content-Type';
  var putUrl = 'https://mysterious-dusk-8248.herokuapp.com/todos/' + id.substring(1,id.length);
  xhrRequest(method, putUrl, data, typeMakeDone, function (response) {
    null
  });
}

function dealToDo(event) {
  console.log(event);
  if (event.target.className === 'deletebutton') {
    remove(event.target.parentNode.id);
  } else if (event.target.className === 'roundedTwo') {
    console.log(event);
    makeDone(event);
  }
}
var listHolder = document.querySelector('ul');
listHolder.addEventListener('click', dealToDo);

var button = document.querySelector('button');
button.addEventListener('click', add);



getToDoList();
