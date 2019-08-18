var firstSlide = document.querySelector('.slider-images__list > li:first-child');
window.onload = firstSlide.classList.add('slider-images__item-active');
var btnnext = document.querySelector('.slider-buttons__button-right');

btnnext.addEventListener('click', function(event) {
event.preventDefault();



var container = this.closest('.slider');
var items = container.querySelectorAll('.slider-images__item');

var activeSlide = container.querySelector('.slider-images__item-active');
  // console.log(activeSlide);
var reqItem = activeSlide.next();
// var reqIndex = reqItem.index();
// var list = container.querySelector('.slider-images__list');
// var duration = 500;

// list.animate({
//   'left' : -qerIndex * 100 + '%'
// }, duration)
});

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
