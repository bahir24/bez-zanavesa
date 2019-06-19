const form = document.querySelector('.form');
const sendButton = document.querySelector('.btn--form');


sendButton.addEventListener('click', function (event) {
  event.preventDefault();
  
  var data = {
    email: form.elements.email.value,
    name: form.elements.name.value,
    tel: form.elements.tel.value,
    service: form.elements.services.value,
  }
  const request = new XMLHttpRequest();
  request.responseType = 'json';
  request.open('POST', 'https://192.168.1.66');
  request.send(JSON.stringify(data));
});