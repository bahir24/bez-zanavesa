const sliderImagesList = document.querySelector('.slider-images__list');
const nextSlideArrow = document.querySelector('.slider-buttons__button-right');
const prevSlideArrow = document.querySelector('.slider-buttons__button-left');
const slide0 = document.querySelector('.slider-images__item:nth-child(1)');
const slide1 = document.querySelector('.slider-images__item:nth-child(2)');
const slide2 = document.querySelector('.slider-images__item:nth-child(3)');
const countOfSlides = 3;
var currSlidePos = {
  leftOffset: -100,
  indexOrder: 0
};


var funcSlideToRight = function SlideToRight() {
  let nextSlidePos = currSlidePos.leftOffset;
  let subIndex = Math.abs((currSlidePos.indexOrder + 999) % 3);
  let reversSubIndex = 5 % (subIndex + 3);
  currSlidePos.indexOrder++;
  let iterIndex = (currSlidePos.indexOrder + reversSubIndex) / 3; 
  currSlidePos.leftOffset = nextSlidePos - 100;
  sliderImagesList.style.left = currSlidePos.leftOffset + '%';
  let transformString = 'translateX' + '(' + iterIndex * 300 + '%' + ')';
  eval('slide' + subIndex).style.transform = transformString;
};

var funcSlideToLeft = function SlideToLeft() {
  currSlidePos.indexOrder--;
  let nextSlidePos = currSlidePos.leftOffset;
  let subIndex = Math.abs((currSlidePos.indexOrder + 999) % 3);
  currSlidePos.leftOffset = nextSlidePos + 100;
  sliderImagesList.style.left = currSlidePos.leftOffset + '%';  
  let iterIndex = (currSlidePos.indexOrder - subIndex) / 3;  
  let transformString = 'translateX' + '(' + iterIndex * 300 + '%' + ')';
  eval('slide' + subIndex).style.transform = transformString;
};

nextSlideArrow.addEventListener('click', funcSlideToRight);
prevSlideArrow.addEventListener('click', funcSlideToLeft);

setInterval(funcSlideToRight, 5000);