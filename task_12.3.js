task = 'task № 12.3';
console.log(task);

const buttonBig = document.querySelector('.but-b');
const list = document.querySelector('.list');
const text = document.querySelector('.message');
const smolButton = document.querySelector('.but-a');

    buttonBig.addEventListener('click', function() {
    const message = prompt('Введите новую задачу');

    const newLi = document.createElement('li');
    const newPforLi = document.createElement('p');
    const newButforLi = document.createElement('button');
    const newDivforLi = document.createElement('div');
    
    newDivforLi.classList.add('container');
        newButforLi.classList.add('but-a');
        newPforLi.classList.add('message');

        newPforLi.textContent = message;
        newButforLi.textContent = 'Удалить';

        newLi.appendChild(newDivforLi);
        newLi.appendChild(newPforLi);
        newLi.appendChild(newButforLi);
        list.appendChild(newLi);
    
})

const li = document.querySelector('li');
const newlist = document.querySelector('ol');

newlist.addEventListener('click', function(event) {
    if (event.target.tagName === "BUTTON") {
        event.target.newlist.removeChild('li');
        console.log('Вы кликнули');
    }
})
 