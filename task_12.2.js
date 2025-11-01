task = 'task № 12.2';
console.log(task);

const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('click', function(event) {
  console.log(`Була клікнута: ${event.target.textContent}`);
})