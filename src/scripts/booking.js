const btnsBook = document.querySelectorAll('.btn--book');
const messageBook = document.querySelector('.booking');
const closeBook = document.querySelectorAll('.booking__close');
const screenSend = document.querySelector('.booking__send');
const screenAbout = document.querySelector('.booking__about');



// function screenBooking(screenType) {

for (i = 0; i < btnsBook.length; i++) {
btnsBook[i].addEventListener('click', function(event) {
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
closeBook[i].addEventListener('click', function (event) {
  document.body.classList.remove("stop-scrolling");

  messageBook.classList.remove("booking--active");
  screenSend.classList.remove("booking__send--active");
  screenAbout.classList.remove("booking__about--active");
  console.log(screenSend);

});
};
// screenBooking(btnsBook[i].getAttribute('data'))