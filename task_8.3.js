task = 'task № 8.3';
console.log(task);

function getEnterNumber() {
    let enter = +(prompt('Введите число '));

    for (let i = 0; i < 10; i++) {
       if (enter < 100 || enter === NaN) {
            enter = +(prompt('Введите еще число '));
        } else if (enter > 100) {
            return console.log(`Вы ввели число ${enter}`)
        } 
    }

    return console.log(`Цикл окончен окончен числом ${enter}`); ;
}

getEnterNumber();      