var mainApp = {

  counter: 0,
  url: 'http://10.18:3000/todos/',
  listHolder: document.querySelector('ul'),
  button: document.querySelector('button'),

  createTodoText(responsedTodo, ListElement) {
    const textDiv = document.createElement('div');
    textDiv.textContent = responsedTodo.text;
    textDiv.classList.value = 'textInListLine';
    if (responsedTodo.text === 'Presentation') {
      const link = document.createElement('a');
      link.setAttribute('href', 'http://danielliptak.github.io/project/');
      link.appendChild(textDiv);
      ListElement.appendChild(link)
    } else
      { ListElement.appendChild(textDiv);
    }
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
    const newLiElement = document.createElement('li');
    newLiElement.id = 'i' + oneToDo.id;
    // newLiElement.setAttribute('data-id', oneToDo.id);
    newLiElement.classList.value = 'todo-item';
    if (oneToDo.completed) {
      newLiElement.classList.add('checked');
    }
    mainApp.createTodoText(oneToDo, newLiElement);
    mainApp.createDellButt(oneToDo, newLiElement);
    mainApp.createCheckbox(oneToDo, newLiElement);
    document.querySelector('ul').appendChild(newLiElement);
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
    mainApp.xhrRequest('GET', mainApp.url, {}, 'Accept', function (response) {
      mainApp.drawTodo(response);
    });
  },

  add() {
    const data = JSON.stringify(
      {
        text: String(document.querySelector('.rawText').value),
      });
    mainApp.xhrRequest('POST', mainApp.url, data, 'Content-Type', function (response) {
      mainApp.createToDoLine(response);
    });
  },

  remove(id) {
    const removeUrl = this.url + id.substring(1, id.length);
    mainApp.xhrRequest('DELETE', removeUrl, {}, 'Accept', function (response) {
      const todoList = document.querySelector('ul');
      todoList.removeChild(document.querySelector('#' + id));
    });
  },

  makeDone(event) {
    const sentenceText = event.target.parentNode.previousSibling.previousSibling.textContent;
    const id = event.target.parentNode.parentNode.id;
    const data = JSON.stringify({ text: String(sentenceText), completed: event.target.checked });
    const putUrl = this.url + id.substring(1, id.length);
    mainApp.xhrRequest('PUT', putUrl, data, 'Content-Type', function (response) {
      document.querySelector('#' + id).classList.toggle('checked');
    });
  },

  dealToDo(event) {
    if (event.target.className === 'deletebutton') {
      mainApp.remove(event.target.parentNode.id);
    } else if (event.target.className === 'roundedTwo' && event.target.type === 'checkbox') {
      mainApp.makeDone(event);
    }
  },
  init() {
    mainApp.listHolder.addEventListener('click', mainApp.dealToDo);
    mainApp.button.addEventListener('click', mainApp.add);
    mainApp.getToDoList();
  },
};
mainApp.init();
