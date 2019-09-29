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


nextSlideArrow.addEventListener('click', function SlideToRight() {
  let nextSlidePos = currSlidePos.leftOffset;
  let subIndex = currSlidePos.indexOrder % 3;
  let reversSubIndex = 5 % (subIndex + 3);
  currSlidePos.indexOrder++;
  
  let iterIndex = (currSlidePos.indexOrder + reversSubIndex) / 3;
  let transformString = 'translateX' + '(' + iterIndex * 300 + '%' + ')';
  eval('slide' + subIndex).style.transform = transformString;
  currSlidePos.leftOffset = nextSlidePos - 100;
  sliderImagesList.style.left = currSlidePos.leftOffset + '%';
});

prevSlideArrow.addEventListener('click', function SlideToLeft() {
  let nextSlidePos = currSlidePos.leftOffset;
  let subIndex = currSlidePos.indexOrder % 3;
  let reversSubIndex = 5 % (subIndex + 3);
  currSlidePos.indexOrder--;
  console.log(currSlidePos.indexOrder);
  let iterIndex = (currSlidePos.indexOrder + subIndex) / 3;
  let transformString = 'translateX' + '(' + (iterIndex * 300) * (-1) + '%' + ')';
  eval('slide' + reversSubIndex).style.transform = transformString;
  currSlidePos.leftOffset = nextSlidePos + 100;
  sliderImagesList.style.left = currSlidePos.leftOffset + '%';
});


































// var firstSlide = document.querySelector('.slider-images__list > li:first-child');
// window.onload = firstSlide.classList.add('slider-images__item-active');
// var btnnext = document.querySelector('.slider-buttons__button-right');

// btnnext.addEventListener('click', function(event) {
// event.preventDefault();



// var container = this.closest('.slider');
// var items = container.querySelectorAll('.slider-images__item');

// var activeSlide = container.querySelector('.slider-images__item-active');
  // console.log(activeSlide);
// var reqItem = activeSlide.next();
// var reqIndex = reqItem.index();
// var list = container.querySelector('.slider-images__list');
// var duration = 500;

// list.animate({
//   'left' : -qerIndex * 100 + '%'
// }, duration)
// });

// $(function () {
//   $('.slider-buttons__button-right').on('click', function(e){
//     e.preventDefault();

//     var $this = $(this),
//       container = $this.closest('.slider'),
//       items = container.find('.slider-images__item'),
//       activeSlide = items.filter('.active'),
//       reqItem = activeSlide.next(),
//       reqIndex = reqItem.index(),
//       list = container.find('.slider-images__list'),
//       duration = 500;


//     if (reqItem.lenght) {

//     list.animate({
//       'left' : -reqIndex * 100 + '%'      
//     }, duration, function () {
//       activeSlide.removeClass('active');
//       reqItem.addClass('active');
//       });
//     }
//   });
// });
