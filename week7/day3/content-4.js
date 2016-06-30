var new_items = ['apple', 'banana', 'cat', 'dog'];
new_items.forEach(function (e, i) {
  document.querySelectorAll('li')[i].innerHTML = e;
})
