const form = document.querySelector('.form');
const sendButton = document.querySelector('.btn--form');

sendButton.addEventListener('click', function (event) {
  event.preventDefault();  

  if (validateForm(form)) {
    var data = {
    email: form.elements.email.value,
    name: form.elements.name.value,
    tel: form.elements.tel.value,
    service: form.elements.services.value
  }
    const btnOther = document.querySelector('.btn__other');
    const sent = document.querySelector('.form__rows > li:last-child');
    btnOther.addEventListener('click', function (event) {
      event.preventDefault();
      sent.classList.remove("form__row--active");
      // var i;
      // for (i = 0; i < data.lendth; i++) {
    });
  sent.classList.add("form__row--active");
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('POST', 'msg.php');
  xhr.send(JSON.stringify(data));
    form.elements.email.value = ''
    form.elements.name.value = ''
    form.elements.tel.value = ''
    form.elements.services.value = ''
  }
    
});

function validateForm(form) {
  let valid = true;
  if (!validateField(form.elements.name)) {
    valid = false;
  }
  if (!validateField(form.elements.email)) {
    valid = false;
  }
  if (!validateField(form.elements.tel)) {
    valid = false;
  }
  if (!validateField(form.elements.services)) {
    valid = false;
  }
  return valid;
}

function validateField(field) {
  field.nextElementSibling.textContent = field.validationMessage;
  return field.checkValidity();
}
