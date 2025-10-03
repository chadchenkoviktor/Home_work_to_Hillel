// Task 4.1
let userName = prompt('How are you name?');

if (userName == null || userName == '') {
    alert('Вы не указали свое имя!');
} else {
    alert(`Hello, ${userName}! How are you?`);
}
