var listElements = document.querySelectorAll('li');

function countElements() {
  document.querySelector('.result').innerHTML = listElements.length
};

var button = document.querySelector('button');
button.addEventListener('click', countElements);
