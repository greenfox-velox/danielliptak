var mainApp = {

  counter: 0,
  url: 'http://localhost:3000/todos/',

  createTodoText(responsedTodo, ListElement) {
    const textDiv = document.createElement('div');
    textDiv.textContent = responsedTodo.text;
    textDiv.classList.value = 'textInListLine';
    ListElement.appendChild(textDiv);
  },

  createCheckbox(responsedTodo, ListElement) {
    const newDiv = document.createElement('div');
    newDiv.classList.value = 'roundedTwo';
    const newCheckbox = document.createElement('input');
    newCheckbox.setAttribute('id', String(this.counter));
    newCheckbox.type = 'checkbox';
    newCheckbox.classList.value = 'roundedTwo';
    newCheckbox.checked = responsedTodo.completed;
    const newlabel = document.createElement('label');
    newlabel.setAttribute('for', String(this.counter++));
    newDiv.appendChild(newCheckbox);
    newDiv.appendChild(newlabel);
    ListElement.appendChild(newDiv);
  },

  createDellButt(responsedTodo, ListElement) {
    const button = document.createElement('button');
    button.classList.value = 'deletebutton';
    ListElement.appendChild(button);
  },

  createToDoLine(oneToDo) {
    const NewLiElement = document.createElement('li');
    NewLiElement.id = 'i' + oneToDo.id;
    NewLiElement.classList.value = 'todo-item';
    if (oneToDo.completed) {
      NewLiElement.classList.add('checked');
    }
    mainApp.createTodoText(oneToDo, NewLiElement);
    mainApp.createDellButt(oneToDo, NewLiElement);
    mainApp.createCheckbox(oneToDo, NewLiElement);
    document.querySelector('ul').appendChild(NewLiElement);
  },

  drawTodo(todoList) {
    todoList.forEach(mainApp.createToDoLine);
  },

  xhrRequest(method, url, data, type, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader(type, 'application/json');
    xhr.send(data);
    xhr.onload = function () {
      const readyState = xhr.readyState;
      if (readyState === 4) {
        cb(JSON.parse(xhr.response));
      } else {
        console.log('Something Happend');
      }
    };
  },

  getToDoList() {
    const method = 'GET';
    const getType = 'Accept';
    mainApp.xhrRequest(method, mainApp.url, {}, getType, function (response) {
      mainApp.drawTodo(response);
    });
  },

  add() {
    const sentence = document.querySelector('.rawText').value;
    const data = JSON.stringify({ text: String(sentence) });
    const method = 'POST';
    const addType = 'Content-Type';
    mainApp.xhrRequest(method, mainApp.url, data, addType, function (response) {
      mainApp.createToDoLine(response);
    });
  },

  remove(id) {
    const removeUrl = this.url + id.substring(1, id.length);
    const removeType = 'Accept';
    const method = 'DELETE';
    mainApp.xhrRequest(method, removeUrl, {}, removeType, function (response) {
      const todoList = document.querySelector('ul');
      todoList.removeChild(document.querySelector('#' + id));
    });
  },

  makeDone(event) {
    const sentenceText = event.target.parentNode.previousSibling.previousSibling.textContent;
    const id = event.target.parentNode.parentNode.id;
    const data = JSON.stringify({ text: String(sentenceText), completed: event.target.checked });
    const method = 'PUT';
    const typeMakeDone = 'Content-Type';
    const putUrl = this.url + id.substring(1, id.length);
    mainApp.xhrRequest(method, putUrl, data, typeMakeDone, function (response) {
      document.querySelector('#' + id).classList.toggle('checked');
    });
  },

  dealToDo: function (event) {
    if (event.target.className === 'deletebutton') {
      mainApp.remove(event.target.parentNode.id);
    } else if (event.target.className === 'roundedTwo' && event.target.type === 'checkbox') {
      mainApp.makeDone(event);
    }
  },
  listHolder: document.querySelector('ul'),
  button: document.querySelector('button'),
};

mainApp.listHolder.addEventListener('click', mainApp.dealToDo);
mainApp.button.addEventListener('click', mainApp.add);

mainApp.getToDoList();
