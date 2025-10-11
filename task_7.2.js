task = 'task № 7.2';
console.log(task);

const array = [2, 'a', 6,'b', false, 4, 8];
const array2 = ['c', 7, Boolean, 3, 5 ,'string' , 9];

const calcNamber = function(object) {
    let newArr = [];
    let summ = 0;
    let totalAmount;
    let arithmeticMean;

    for (let arr of object) {
        if (Number(arr)) {
            newArr.push(arr);
        }
    }
    for (let i = 0; i <= newArr.length - 1; i++) {
         totalAmount = summ += newArr[i];
    }
    
    arithmeticMean = totalAmount / newArr.length;
    console.log(arithmeticMean);
}

calcNamber(array);