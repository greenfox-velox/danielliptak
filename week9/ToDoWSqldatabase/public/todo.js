var counter = 0;
var url = 'http://localhost:3000/todos/';

function createTodoText(responsedTodo, ListElement){
  let textDiv = document.createElement('div');
  textDiv.textContent = responsedTodo.text;
  textDiv.classList.value = 'textInListLine';
  ListElement.appendChild(textDiv);
}

function createCheckbox(responsedTodo, ListElement) {
  let newDiv = document.createElement('div');
  newDiv.classList.value = 'roundedTwo';
  let newCheckbox = document.createElement('input');
  newCheckbox.setAttribute('id', String(counter));
  newCheckbox.type = 'checkbox';
  newCheckbox.classList.value = 'roundedTwo';
  newCheckbox.checked = responsedTodo.completed;
  let newlabel = document.createElement('label');
  newlabel.setAttribute('for', String(counter++));
  newDiv.appendChild(newCheckbox);
  newDiv.appendChild(newlabel);
  ListElement.appendChild(newDiv);
}

function createDellButt(responsedTodo, ListElement) {
  let button = document.createElement('button');
  button.classList.value = 'deletebutton';
  ListElement.appendChild(button);
}

function createToDoLine(oneToDo) {
  let NewLiElement = document.createElement('li');
  NewLiElement.id = 'i' + oneToDo.id;
  NewLiElement.classList.value = 'todo-item';
  if (oneToDo.completed) {
    NewLiElement.classList.add('checked');
  }
  createTodoText(oneToDo, NewLiElement);
  createDellButt(oneToDo, NewLiElement);
  createCheckbox(oneToDo, NewLiElement);
  document.querySelector('ul').appendChild(NewLiElement);
}

function drawTodo(todoList) {
  todoList.forEach(createToDoLine);
}

function xhrRequest(method, url, data, type, cb) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.setRequestHeader(type, 'application/json');
  xhr.send(data);
  xhr.onload = function () {
    let readyState = xhr.readyState;
    if (readyState === 4) {
      cb(JSON.parse(xhr.response));
    } else {
      console.log('Something Happend');
    }
  };
}

function getToDoList() {
  let method = 'GET';
  let getType = 'Accept';
  xhrRequest(method, url, {}, getType, function (response) {
    drawTodo(response);
  });
}

function add() {
  let sentence = document.querySelector('.rawText').value;
  let data = JSON.stringify({ text: String(sentence) });
  let method = 'POST';
  let addType = 'Content-Type';
  xhrRequest(method, url, data, addType, function (response) {
    createToDoLine(response);
  });
}

function remove(id) {
  let removeUrl = url + id.substring(1, id.length);
  let removeType = 'Accept';
  let method = 'DELETE';
  xhrRequest(method, removeUrl, {}, removeType, function (response) {
    let todoList = document.querySelector('ul');
    todoList.removeChild(document.querySelector('#' + id));
  });
}

function makeDone(event) {
  let sentenceText = event.target.parentNode.previousSibling.previousSibling.textContent;
  let id = event.target.parentNode.parentNode.id;
  let data = JSON.stringify({ text: String(sentenceText), completed: event.target.checked });
  let method = 'PUT';
  let typeMakeDone = 'Content-Type';
  let putUrl = url + id.substring(1, id.length);
  xhrRequest(method, putUrl, data, typeMakeDone, function (response) {
  document.querySelector('#' + id).classList.toggle('checked') ;
  });
}

function dealToDo(event) {
  if (event.  target.className === 'deletebutton') {
    remove(event.target.parentNode.id);
  } else if (event.target.className === 'roundedTwo' && event.target.type === 'checkbox') {
    makeDone(event);
  }
}
let listHolder = document.querySelector('ul');
listHolder.addEventListener('click', dealToDo);

let button = document.querySelector('button');
button.addEventListener('click', add);

getToDoList();
