'use strict';

var elements = document.querySelectorAll('p');
for (var i = 0; i < elements.length; i++) {
  if (elements[i].classList.value === 'cat') {
    window.alert('YEAH CAT!');
  }
  else if (elements[elements.length-1].textContent === elements[i].classList.value) {
    document.querySelector('.apple').textContent = 'pear';
  }
  else if (elements[1].textContent === elements[i].classList.value) {
    document.querySelector('.cat').textContent = 'dog';
  }
}
document.querySelector('.apple').classList.add('red');
document.querySelector('.balloon').classList.remove('balloon')

// console.log('asteroid?', asteroid.classList.contains('asteroid'));
// console.log('planet?', asteroid.classList.contains('planet'));
//
// asteroid.classList.add('new-class');
// asteroid.classList.remove('asteroid');
// console.log('still asteroid?', asteroid.classList.contains('asteroid'));
