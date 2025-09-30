// Task 3.1
let num = 5;
console.log(typeof num);
let str = 'tree';
console.log(typeof str);
let bool = true;
console.log(typeof bool);
let item = null;
console.log(typeof item);
let error;
console.log(typeof error);
let bigNum = 5n;
console.log(typeof bigNum);
let sym = Symbol('unique');
console.log(typeof sym);

const obj = {a:1, b:2, c:3};
console.log(typeof obj);

// Task 3.2
let user = prompt('Введите имя');
let age = Number(prompt('Bведите возраст'));
let weight = Number(prompt('Bведите вeс'));
const date = `Приветствуем вас ${user}, в вашем возрасте ${age} лет, 
            иметь вес ${weight} кг не куда не годится, 
            вам рекомендуется спорт и диета )`;
            console.log(date);

// Task 3.3
let sum = '10369';
let exchange = sum.split("");
console.log(exchange);

let i = 0;
while (i < 10){
    console.log(i);
    i++;
}