var body = document.querySelector('body')
body.classList.add('party');

var button = document.querySelector('button');
function swichParty () {
  body.classList.toggle('party');
}
button.addEventListener('click', swichParty);
