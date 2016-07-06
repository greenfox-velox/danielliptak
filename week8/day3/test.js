'use strict ';

var xhr = new XMLHttpRequest();
// xhr.onload = function () {
//   console.log(JSON.parse(xhr.response).season);
// };
xhr.open('GET', 'http://calapi.inadiutorium.cz/api/v0/en/calendars/default/2016/7/06');
xhr.send();


function startRequest() {
  document.querySelector('h1').textContent = JSON.parse(xhr.response).weekday;
  document.querySelector('h2').textContent = JSON.parse(xhr.response).celebrations[1].title;
}

var button = document.querySelector('.button');
button.addEventListener('click', startRequest);
