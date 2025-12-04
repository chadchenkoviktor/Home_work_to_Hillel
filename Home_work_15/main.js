const form = document.querySelector('.form');
const formInput = document.querySelector('.form__input');
const ul = document.querySelector(".js--todos-wrapper");
const buttonElem = document.querySelector('.todo-item__delete');
let n = 0;
let newTask;

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const value = formInput.value;
    
    const li = document.createElement('li');
    const input = document.createElement('input');
    const button = document.createElement('button');
    const span = document.createElement("span");

    li.classList = "todo-item";
    input.setAttribute('type', 'checkbox');
    span.classList.add("todo-item__description");
    
    button.classList.add("todo-item__delete");
    button.textContent = 'Видалити';

    li.append(input);
    li.append(span);
    li.append(button);

    ul.append(li);

    formInput.value = '';

    newTask = {
        id: Date.now(),
        text: value,
        done: false,
    }

    tasks.push(newTask);
    console.log(tasks);

    const cssClass = newTask.done ? "todo-item__description task-title--done":"todo-item__description";
    span.classList.add(cssClass);

    li.setAttribute('id', newTask.id);
    span.textContent = newTask.text;

    saveToLocalStorage ()

})


let tasks = [];

if(localStorage.getItem(tasks)) {
    tasks = JSON.parse(localStorage.getItem(tasks));
}


ul.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const parentNode = event.target.closest(".todo-item");
        const id = Number(parentNode.id);
        const index = tasks.findIndex(function(task) {
            return task.id === id;    
        })
        tasks.splice(index, 1);
        parentNode.remove();
        
        saveToLocalStorage ()
    }
    
})

const span = document.querySelector(".todo-item__description")
const li = document.querySelector(".todo-item")

ul.addEventListener('click', function(event) {
    if (event.target.checked) {
        event.target.parentElement.classList.add('todo-item--checked');
        newTask.done = true;
    } else if (!event.target.checked) {
        event.target.parentElement.classList.remove('todo-item--checked');
        newTask.done = false;
    }
    
})

function saveToLocalStorage () {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}




