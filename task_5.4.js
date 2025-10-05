task = 'task № 5.4';
console.log(task);

let num = Number(prompt('Введите любое целое число')); 
   
for( let el = 2; el <= Math.sqrt(num); ++el) {
    if (num % el === 0 || num <=1) {
        console.log(num + '-' + 'Это не простое число!');
        break;  
    } else {
       console.log(num + '-' + 'это простое число');
       break;
    } 
}