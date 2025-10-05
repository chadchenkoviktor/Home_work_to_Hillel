task = 'task № 5.3';
console.log(task);

let N = Number(prompt('Введите любое целое число'));

for (let k = 1; k <= 100; k++) {
    let res = k**2;
    
    if ( res <= N ) {
        console.log(res);
    } 
}