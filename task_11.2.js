task = 'task № 11.2';
console.log(task);

const button = document.querySelector('.but');
const text = document.querySelector('.text');

button.addEventListener('click', function() {
    text.classList.toggle('color');
})