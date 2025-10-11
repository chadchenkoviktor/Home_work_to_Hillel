task = 'task № 7.3';
console.log(task);

const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const delItem = +prompt('Введи число от 1 до 10');

function removeElement (arrays, item) {

        let index = arrays.indexOf(item);
            
        if (index !== -1) {
            arrays.splice(index, 1); 
        }
        console.log(arrays);
        return arrays;
}

removeElement (array3,delItem);