var up = document.querySelector('.up');
console.log(up);
up.addEventListener('click', function up (event) {
  event.preventDefault();
  window.scrollTo(0, 0);
  // setTimeout('up()', 20);
});