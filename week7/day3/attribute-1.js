var link = document.querySelector('img').src
console.log(link);
document.querySelector('img').src = 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/4/005/025/08e/11a38b0.jpg';
document.querySelector('a').href = 'http://www.greenfoxacademy.com/';
var second_but = document.querySelector('.this-one');
second_but.disabled = true;
second_but.textContent = "Don't click me!";
