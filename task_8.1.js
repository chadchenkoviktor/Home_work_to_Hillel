// Task 8.1
task = 'task № 8.1';
console.log(task);

function getSumNambers() {
     let value = 0;
     return function (n) {
          value += n;
          return value;
     }
};

const increment = getSumNambers();


console.log(increment(2));
console.log(increment(5));
console.log(increment(8))