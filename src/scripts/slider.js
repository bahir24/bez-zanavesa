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
  //находим значение left у элемента, который по умолчанию загружается на странице
  let nextSlidePos = currSlidePos.leftOffset;
  //получаем значение поля объекта, привязанного к загружаемому по умолчанию элементу слайдера(li)
  //значение по умолчанию "0"
  //таким образом, присваеваем инедексы 1 и 2 оставшимся двум экранам слайдера
  let subIndex = 3 % currSlidePos.indexOrder;
  //получаем ряд (обратный) для рассчета коэффициента, позволяющего "бесконечно" мотать слайдер
  //значения этого ряда будут суммироваться с текущим indexOrder всегда образуя число кратное (трем)  
  //на этот коэффициент (количество пройденых кругов) будет умножаться свойство transform: translate 300% * коэф-т
  let reversSubIndex = 5 % (subIndex + 3);
  //при движении вправо добавляем 1 к indexOrder
  currSlidePos.indexOrder++;
  
  console.log(reversSubIndex);
  console.log(subIndex);
  //высчитываем коэффициент-счетчик
  // let iterIndex = (currSlidePos.indexOrder + reversSubIndex) / 3;
  //склеиваем строку с необходимым синтаксисом
  //translateX(индекс-счетчик * 300%)
  // let transformString = 'translateX' + '(' + iterIndex * 300 + '%' + ')';


  //в результате, выбираем предидущий элемент, т. к. нумеруются они с "0"
  //ему и добавляется свойство transform
  // eval('slide' + subIndex).style.transform = transformString;
  //записываем новое значение left у всего блока
  // currSlidePos.leftOffset = nextSlidePos - 100;
  //добавляем блоку необходимые свойства
  // sliderImagesList.style.left = currSlidePos.leftOffset + '%';
});

// prevSlideArrow.addEventListener('click', function SlideToLeft() {
//   //находим значение left у элемента, который в настоящий момент отображается на странице
  
//   let nextSlidePos = currSlidePos.leftOffset;
//   //получаем индекс текущего элемента
// let subIndex = (currSlidePos.indexOrder) % 3;
//   currSlidePos.indexOrder--;
//   //так же создаем обратный ряд для расчета коэффициента количества кругов
//   let reversSubIndex = 5 % (subIndex + 3);
//   //уменьшаем значение indexOrder на 1
  

  
//   // console.log(currSlidePos.indexOrder);
//   //расчитываем количество пройденых кругов
//   let iterIndex = (currSlidePos.indexOrder - reversSubIndex) / 3;
  
//   let transformString = 'translateX' + '(' + iterIndex * 300 + '%' + ')';
//   console.log(transformString);
  
//   eval('slide' + reversSubIndex).style.transform = transformString;
//   currSlidePos.leftOffset = nextSlidePos + 100;
//   sliderImagesList.style.left = currSlidePos.leftOffset + '%';
  
// });


































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
