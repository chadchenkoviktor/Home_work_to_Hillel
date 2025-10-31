// Task 12.1
task = 'task № 12.1';
console.log(task);

const but1 = document.querySelector('.but_1');
const but2 = document.querySelector('.but_2');
const frame = document.querySelector('.frame');

but1.addEventListener('click', function() {
  const url = prompt('Введите ссылку на ресурс');
  window.open(url, '_blank');
  frame.src = url; 
})

but2.addEventListener('click', function(event) {
  window.history.go(-1);
})



