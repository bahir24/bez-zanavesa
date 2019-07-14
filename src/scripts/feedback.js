const form = document.querySelector('.form');
const sendButton = document.querySelector('.btn--form');

sendButton.addEventListener('click', function (event) {
  event.preventDefault();  
  var data = {
    email: form.elements.email.value,
    name: form.elements.name.value,
    tel: form.elements.tel.value,
    service: form.elements.services.value
  }
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('POST', 'robot.php');
  xhr.send(JSON.stringify(data));
});