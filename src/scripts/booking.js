const btnsBook = document.querySelectorAll('.btn--book');
const messageBook = document.querySelector('.booking');
const closeBook = document.querySelectorAll('.booking__close');
const screenSend = document.querySelector('.booking__send');
const screenAbout = document.querySelector('.booking__about');
const aboutSliderRight = screenAbout.querySelector('.slider-buttons__button-right');
const aboutSliderLeft = screenAbout.querySelector('.slider-buttons__button-left');
const aboutSliderButtons = screenAbout.querySelectorAll('.slider-buttons__button');
const bookOnHoverForm = document.querySelectorAll('.book');
const inputPromoCodes = document.querySelectorAll('.booking__promocode');
const buttonBookSend = screenSend.querySelector('.btn');
const inputBookSends = screenSend.querySelectorAll('.booking__send-field--input');
var bookCart = [];

function priceCountBooking() {
  let bookPrice = 0;
  if (bookCart[0] === 'Сказки Шаляпина') {
    bookPrice = 15000;
  } else {
    if (bookCart[0] === 'Рождественское чудо') {
      bookPrice = 12000;
    };
  };
  if (bookCart[1] === 'народные игры' || bookCart[1] === 'дед мороз со снегурочкой') {
    bookPrice = bookPrice + 3000;
  };
  if (bookCart[2] === 'KVARTIRNIK') {
    bookPrice = bookPrice - 3000;
  };
  bookCart[10] = bookPrice;
};

for (var bookForms = 0; bookForms < bookOnHoverForm.length; bookForms++) {
  var bookForm = bookOnHoverForm[bookForms];
  var bookFormSelects = bookForm.getElementsByTagName('select');
  for (let bookSelectFields = 0; bookSelectFields < bookFormSelects.length; bookSelectFields++) {
    var bookFormSelect = bookFormSelects[bookSelectFields];
    bookFormSelect.addEventListener('change', function () {
      if (bookCart[3] !== '' && bookCart[4] !== '') {
        bookCart[3] = this.parentNode.parentNode.parentNode.querySelector('.book__day').textContent;
        bookCart[4] = this.parentNode.parentNode.parentNode.querySelector('.book__month').textContent;
      };
      bookCart[bookSelectFields] = this.value;
      priceCountBooking();
      this.parentNode.parentNode.parentNode.querySelector('.book__price-count').textContent = bookCart[10];
      console.log(bookCart);
    });
  };
  inputPromoCodes[bookForms].addEventListener('keyup', function () {
    if (bookCart[3] !== '' && bookCart[4] !== '') {
      bookCart[3] = this.parentNode.parentNode.parentNode.querySelector('.book__day').textContent;
      bookCart[4] = this.parentNode.parentNode.parentNode.querySelector('.book__month').textContent;
    };
    bookCart[2] = this.value;
    priceCountBooking();
    this.parentNode.parentNode.nextElementSibling.querySelector('.book__price-count').textContent = bookCart[10];
    console.log(bookCart);
  });
};

for (i = 0; i < btnsBook.length; i++) {
  btnsBook[i].addEventListener('click', function () {
    let screenType = this.getAttribute('data');
    let selectorName = '.booking__' + screenType;
    let screenToOpen = 'booking__' + screenType + '--active';
    document.body.className = "stop-scrolling";
    messageBook.classList.add("booking--active");
    if (screenType === 'send') {
      if (bookCart[0] !== undefined) {
        screenSend.querySelector('.booking__send-1').textContent = bookCart[0] + ' ';
        if (bookCart[1]) {
          screenSend.querySelector('.booking__send-2').textContent = 'и ' + bookCart[1] + ' ';
        } else {
          screenSend.querySelector('.booking__send-2').textContent = '';
        };
        screenSend.querySelector('.booking__send-3').textContent = bookCart[3] + ' ';
        screenSend.querySelector('.booking__send-4').textContent = bookCart[4] + ' ';
        screenSend.querySelector('.booking__send-5').textContent = bookCart[10] + ' рублей';
      } else {
        screenSend.querySelector('.booking__send-text').textContent = 'Вы ничего не выбрали';

      };
    };
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
  aboutSliderButtons[i].addEventListener('click', function () {
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
// console.log(inputBookSends);
buttonBookSend.addEventListener('click', function (event) {
  event.stopPropagation();
  for (var inputBookSend = 0; inputBookSend < inputBookSends.length; inputBookSend++) {
    bookCart[5 + inputBookSend]  = inputBookSends[inputBookSend].value;
  };
  var bookData = {
    perfomance: bookCart[0],
    additional: bookCart[1],
    promocode: bookCart[2],
    day: bookCart[3],
    month: bookCart[4],
    phone: bookCart[5],
    mail: bookCart[6],
    price: bookCart[10]

  }
  var xhrBook = new XMLHttpRequest();
  xhrBook.responseType = 'json';
  xhrBook.open('POST', 'booking.php');
  xhrBook.send(JSON.stringify(bookData));
  messageResponse = screenSend.querySelector('.send-message__response');
  messageResponse.textContent = 'Ваше сообщение успешно отправлено'
  bookCart = [];
  inputBookSends[0].value = '';
  inputBookSends[1].value = '';
  // console.log(bookCart);
});