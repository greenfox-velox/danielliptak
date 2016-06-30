var asteroidList = document.querySelector('.asteroids');

asteroidList.removeChild(document.querySelector('li'));
var list_new_elements = ['apple', 'bubble', 'cat', 'green fox']

list_new_elements.forEach (function (item) {
  var new_item = document.createElement('li');
  new_item.textContent = item;
  asteroidList.appendChild(new_item);
});
