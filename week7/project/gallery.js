'use strict';

var picList =
['images/1.png',
'images/2.gif',
'images/3.gif',
'images/xhrrequest.png',
'images/callback.png',
'images/next.png',
'images/eventlistener.png',
];

function Galery(pic) {
  this.picList = pic;
  this.counter = 0;
  this.thumb = document.querySelectorAll('.scroll img');
  this.pic = this.picList[this.counter];

  this.setImgTitle = function (counter) {
    document.querySelector('.image-title').innerHTML = 'Image ' + (counter + 1);
  };
  this.drawAllPic = function (counter) {
    document.querySelector('.mainPic').src = this.picList[counter];
    this.setImgTitle(counter);
    this.drawThumbs(counter);
  };
  this.stepRight = function stepRight() {
    this.counter++;
    this.counter %= picList.length;
    this.drawAllPic(this.counter);
  };
  this.stepLeft = function stepLeft() {
    this.counter--;
    this.counter = ((this.counter) % (picList.length) + picList.length) % (picList.length);
    this.drawAllPic(this.counter);
  };
  this.drawThumbs = function (counter) {
    for (var i = 0; i < this.thumb.length; i++) {
      var thumbPosition = (i + counter) % this.picList.length;
      console.log(thumbPosition);
      this.thumb[i].src = this.picList[thumbPosition];
    }
  };
  this.drawAllPic(this.counter);
}

var galery1 = new Galery(picList);

var buttonLeft = document.querySelector('.left');
buttonLeft.addEventListener('click', function () { galery1.stepLeft(); });

var buttonRight = document.querySelector('.right');
buttonRight.addEventListener('click', function () { galery1.stepRight(); });
