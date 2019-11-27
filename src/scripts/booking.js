const btnsBook = document.querySelectorAll('.btn--book');
const messageBook = document.querySelector('.booking');


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
  console.log(screenToOpen);
});
};


// screenBooking(btnsBook[i].getAttribute('data'))