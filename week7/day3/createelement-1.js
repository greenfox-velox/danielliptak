var asteroidList = document.querySelector('.asteroids')
var containerList = document.querySelector('.container')

function add_items(item) {
  var new_item = document.createElement('li');
  new_item.textContent = item;
  asteroidList.appendChild(new_item);
}
add_items('The Green Fox');
add_items('The Lamplighter');

var new_item = document.createElement('h1');
new_item.textContent = 'I can add elements to the DOM!'
containerList.insertBefore(new_item, containerList.childNodes[0]);

var new_pic = document.createElement('img');
new_pic.src = 'http://s2.quickmeme.com/img/01/01ab53a2aae9c77910b917a207bc0cf6555ab7d72babce329934767c60ed547f.jpg';
console.log(new_pic);
containerList.appendChild(new_pic);
