task = 'task № 8.2';
console.log(task);

function getCurry (a) {
    return function (b) {
        return a * b;
    }
}

console.log(getCurry (3)(7));