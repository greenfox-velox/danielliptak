var asteroidList = document.querySelector('.asteroids');

asteroidList.removeChild(document.querySelector('li'));

function add_items(item) {
  var new_item = document.createElement('li');
  new_item.textContent = item;
  asteroidList.appendChild(new_item);
}
add_items('The Fox');
add_items('The Fox');
add_items('The Fox');

// var businessAsteroid = document.querySelector('.b328');
// asteroidList.removeChild(businessAsteroid);
