// $(function () {
//   $('.slider-buttons__button-right').on('click', function(e){
//     e.preventDefault();

//     var $this = $(this),
//       container = $this.closet('.slider'),
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
