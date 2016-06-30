'use strict';

var last_content = document.querySelector('.dog').textContent;
var all_paragraphs = document.querySelectorAll('p');
  for (var i = 0; i < all_paragraphs.length; i++) {
    all_paragraphs[i].textContent = last_content;
  }
