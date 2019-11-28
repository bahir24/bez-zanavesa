const btnsBook = document.querySelectorAll('.btn--book');
const messageBook = document.querySelector('.booking');
const closeBook = document.querySelectorAll('.booking__close');
const screenSend = document.querySelector('.booking__send');
const screenAbout = document.querySelector('.booking__about');
const aboutSliderRight = screenAbout.querySelector('.slider-buttons__button-right');
const aboutSliderLeft = screenAbout.querySelector('.slider-buttons__button-left');
const aboutSliderButtons = screenAbout.querySelectorAll('.slider-buttons__button');
const bookOnHoverForm = document.querySelectorAll('.book');
const bookCart = [];
var arrBookFormSelectOption = []
var option = '';

// function selectedBookingField() {
  // if (option.selected = true) {
function selectedBookingField() {
  // option[selected] !== true;
  };
  
// return 



for (var bookForms = 0; bookForms < bookOnHoverForm.length; bookForms++) {
  var bookForm = bookOnHoverForm[bookForms];
  var bookFormSelects = bookForm.getElementsByTagName('select');
  for (var bookSelectFields = 0; bookSelectFields < bookFormSelects.length; bookSelectFields++) {
    var bookFormSelect = bookFormSelects[bookSelectFields];
    let arrBookFormSelectOptions = Array.from(bookFormSelect.options);
    var selectedOptionValueFilter = arrBookFormSelectOptions.filter(option.selected == 'true');
    // var selectValue = arrBookFormSelectOption.text;
    bookFormSelect.addEventListener('change', function() {
      console.log(selectedOptionValueFilter);
    });
  };
}; 


for (i = 0; i < btnsBook.length; i++) {
btnsBook[i].addEventListener('click', function() {
let screenType = this.getAttribute('data');
let selectorName = '.booking__' + screenType;
let screenToOpen = 'booking__' + screenType + '--active';
document.body.className = "stop-scrolling";
messageBook.classList.add("booking--active");

let selectedScreen = messageBook.querySelector(selectorName);
selectedScreen.classList.add(screenToOpen);
});
};

for (i = 0; i < closeBook.length; i++) {
closeBook[i].addEventListener('click', function () {
  document.body.classList.remove("stop-scrolling");

  messageBook.classList.remove("booking--active");
  screenSend.classList.remove("booking__send--active");
  screenAbout.classList.remove("booking__about--active");
  console.log(screenSend);

});
};

for (i = 0; i < aboutSliderButtons.length; i++) {
  aboutSliderButtons[i].addEventListener('click', function() {
  usedAboutSliderButton = this;
    sliderAboutDirection = this.getAttribute('data');
    var slidesAbout = screenAbout.querySelectorAll('.about-slides__item');
    if (sliderAboutDirection === 'right') {
      var otherSliderAboutDirectionClass = '.slider-buttons__button' + '-left';      
      var otherSliderAboutButton = screenAbout.querySelector(otherSliderAboutDirectionClass);
      for (var slides = 0; slides < slidesAbout.length; slides++) {
        var moveForvardAbout = '-100%';
        slidesAbout[slides].style.left = moveForvardAbout;
      }
    } else {
      otherSliderAboutDirectionClass = '.slider-buttons__button' + '-right';
      var otherSliderAboutButton = screenAbout.querySelector(otherSliderAboutDirectionClass);
      for (slides = 0; slides < slidesAbout.length; slides++) {
        slidesAbout[slides].style.left = 0;
      };
      
    };
    usedAboutSliderButton.classList.add('slider-buttons__button--inactive');
    otherSliderAboutButton.classList.remove('slider-buttons__button--inactive');
  });
};