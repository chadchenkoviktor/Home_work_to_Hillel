// Task 13.1
task = 'task № 13.1';
console.log(task);

const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const textArea = document.getElementById("text");
const emailField = document.getElementById('email');
const tel = document.getElementById('tel');

const fieldErrorName = document.querySelector('.fieldErrorName');
const fieldErrorText = document.querySelector(".fieldErrorText");
const fieldErrorEmail = document.querySelector('.fieldErrorEmail');
const fieldErrorTel = document.querySelector('.fieldErrorTel');

tel.addEventListener('focus', function() {
    tel.value = '+380';
});

form.addEventListener('submit', function(event) {
  const nameValue = nameInput.value.trim();
  const validNameRegex = /^[a-zA-Zа-яА-Я\s\-]+$/; 

  if (nameValue === '' || !validNameRegex.test(nameValue)) {
    fieldErrorName.style.display = 'block';
    event.preventDefault(); 
  } else {
    fieldErrorName.style.display = 'none';
  }

  //for textArea
  const textAreaValue = textArea.value.trim(); 

  if (textAreaValue.length < 5) {
    fieldErrorText.style.display = 'block';
    event.preventDefault();
  }  else {
    fieldErrorText.style.display = 'none';
  }

  const emailRegex = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/i;
  if (!emailField.value.match(emailRegex)) {
    fieldErrorEmail.style.display = 'block';
    event.preventDefault();
  }  else {
    fieldErrorEmail.style.display = 'none';
  }

  const phoneRegex = /^\+38\d{10}$/;
  const phoneValue = tel.value;

  if (!phoneRegex.test(phoneValue)) {
    fieldErrorTel.style.display = 'block';
  } else {
    fieldErrorTel.style.display = 'none';
  }
})












