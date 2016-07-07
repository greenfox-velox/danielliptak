function Translate() {
  var sentence = document.querySelector('.rawText').value
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    document.querySelector('h2').textContent = xhr.response;
  };
  xhr.open('GET', 'https://yoda.p.mashape.com/yoda?sentence='+sentence.split(' ').join('+'), true);
  xhr.setRequestHeader("X-Mashape-Key", "WR0TZmVobsmshQD7DmMYQvvavA4xp1h6Y3Fjsnos6smOwMD4zJ")
  xhr.send();
}

var button = document.querySelector('button');
button.addEventListener('click', Translate);
