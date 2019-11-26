const btnsBook = document.querySelectorAll('.btn--book');
const messageBook = document.querySelector('.booking');
console.log(btnsBook);
for (i = 0; i<btnsBook.length; i++) {
  btnsBook[i].addEventListener('click', function (event){
    event.preventDefault();
    // let mainDiv = document.body;
    document.body.className = "stop-scrolling";
    messageBook.classList.add("booking--active");
    messageBook.querySelector('.booking__send').classList.add('booking__send--active');
  });
};
// btnsBook.addEventListener('click', function (event) {
// event.preventDefault();
// });