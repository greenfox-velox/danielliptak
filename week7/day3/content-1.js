var header = document.querySelector('h1');
window.alert(header.textContent);
var firstparagraph = document.querySelector('p').textContent;
console.log(firstparagraph);
var secondparagraph = document.querySelector('.other').textContent;
window.alert(secondparagraph);
header.textContent = 'New Content';
document.querySelector('.result').textContent = firstparagraph;
