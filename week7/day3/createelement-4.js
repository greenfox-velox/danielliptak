var asteroidList = document.querySelector('.asteroids');
asteroidList.removeChild(document.querySelector('li'));

var planet = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true
  }
]

planet.forEach(function (item) {
  if (item['asteroid'] === true) {
    var new_item = document.createElement('li');
    new_item.textContent = item['content'];
    new_item.classList.value = item['category'];
    asteroidList.appendChild(new_item);
  }
});
