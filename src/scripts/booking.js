const btnsBook = document.querySelectorAll('.btn--book');
console.log(btnsBook);
for (i = 0; i<btnsBook.length; i++) {
  btnsBook[i].addEventListener('click', function (event){
    event.preventDefault();
    
  });
}
// btnsBook.addEventListener('click', function (event) {
// event.preventDefault();
// });