var menu = document.querySelector('.screen-menu');
var burger = document.querySelector('.burger-menu');
var close = document.querySelector('.screen-menu__close');
burger.addEventListener('click', function (event) {
  event.preventDefault();
  menu.classList.add('menu__active');
  // document.body.style.overflow = "hidden";
});
close.addEventListener('click', function (event) {
  event.preventDefault();
  menu.classList.remove('menu__active');
  // document.body.style.overflow = "auto";
});