// Task 13.2
const task = 'task № 13.2';
console.log(task);

const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const text = document.getElementById("text");
const email = document.getElementById('email');
const tel = document.getElementById('tel');

tel.addEventListener('focus', () => {
  if (!tel.value.startsWith('+380')) tel.value = '+380';
});

//універсальна функція для валідації
function validateField({value, minLength = 0, regex, errorElement}) {

  // проверка на пустоту
  if (!value.trim()) {
    errorElement.style.display = 'block';
  } 

  // проверка длины
  else if ( value.trim().length < minLength) {
    errorElement;
  
  }

  // проверка по регулярке (если она передана)
  else if (regex && !regex.test(value.trim())) {
    errorElement.style.display = 'block';
  } else  {
    errorElement.style.display = 'none';
  }

}

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const validations = [
    {
      value: nameInput.value,
      regex: /^[a-zA-Zа-яА-Я\s\-]+$/,
      errorElement: document.querySelector('.fieldErrorName'),
    },
    {
      value: text.value,
      minLength: 5,
      errorElement: document.querySelector('.fieldErrorText'),
    },
    {
      value: email.value,
      regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      errorElement: document.querySelector('.fieldErrorEmail'),
    },
    {
      value: tel.value,
      regex: /^\+38\d{10}$/,
      errorElement: document.querySelector('.fieldErrorTel'),
    },
  ];

  const allValid = validations.every(validateField);
  if (!allValid) return;
  console.log("Форма валидна, можно отправлять!");
});


