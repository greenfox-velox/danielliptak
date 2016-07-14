var counter = 0;

function createCheckbox(newtem, completedOrNot) {
  let newDiv = document.createElement('div');
  newDiv.classList.value = 'roundedTwo';
  newtem.appendChild(newDiv);
  let newCheckbox = document.createElement('input');
  newCheckbox.setAttribute('id', String(counter));
  newCheckbox.type = 'checkbox';
  newCheckbox.classList.value = 'roundedTwo';
  newCheckbox.checked = completedOrNot;
  let newlabel = document.createElement('label');
  newlabel.setAttribute('for', String(counter++));
  newDiv.appendChild(newCheckbox);
  newDiv.appendChild(newlabel);
}

function addCheckBoxAndDelButt(newItem, completedOrNot) {
  let button = document.createElement('button');
  button.classList.value = 'deletebutton';
  newItem.appendChild(button);
  createCheckbox(newItem, completedOrNot);
}

function createToDoLine(oneToDo) {
  console.log(oneToDo);
  let newItem = document.createElement('li');
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
  let url = 'http://localhost:3000/todos';
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
  let addUrl = 'http://localhost:3000/todos';
  xhrRequest(method, addUrl, data, addType, function (response) {
    console.log(response);
    createToDoLine(response);
  });
}

function remove(id) {
  let removeUrl = 'http://localhost:3000/todos/' + id.substring(1, id.length);
  let removeType = 'Accept';
  let method = 'DELETE';
  xhrRequest(method, removeUrl, {}, removeType, function (response) {
    let todoList = document.querySelector('ul');
    todoList.removeChild(document.querySelector('#' + id));
  });
}

function makeDone(event) {
  let sentenceText = event.target.parentNode.parentNode.textContent;
  let id = event.target.parentNode.parentNode.id;
  let data = JSON.stringify({ text: String(sentenceText), completed: event.target.checked });
  console.log(data);
  let method = 'PUT';
  let typeMakeDone = 'Content-Type';
  let putUrl = 'http://localhost:3000/todos/' + id.substring(1, id.length);
  xhrRequest(method, putUrl, data, typeMakeDone, function (response) {
  document.querySelector('#' + id).classList.toggle('checked') ;
  });
}

function dealToDo(event) {
  console.log(event);
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
