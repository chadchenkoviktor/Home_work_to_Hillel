// Task 17.1
task = 'task № 17.1';
console.log(task);

class Calculator {
    add (number1, number2) {
        return number1 + number2;
    }

    subtract (number1, number2) {
        return number1 - number2;
    }

    multiply (number1, number2) {
        return number1 * number2;
    }

    divide (number1, number2) {
        return number1 / number2;
    }
}

const calc = new Calculator();
console.log(calc.add(5, 3));
console.log(calc.subtract(10, 4));
console.log(calc.multiply(6, 3));
console.log(calc.divide(8, 2));


class Calculator1 {
   static add (number1, number2) {
        return number1 + number2;
    }
   static subtract (number1, number2) {
        return number1 - number2;
    }

    static multiply (number1, number2) {
        return number1 * number2;
    }

    static divide (number1, number2) {
        return number1 / number2;
    }
}

const result = Calculator1.add(2, 3);
console.log(result);

const result2 = Calculator1.subtract(4, 3);
console.log(result2);

const result3 = Calculator1.multiply(5, 3);
console.log(result3);

const result4 = Calculator1.divide(8, 4);
console.log(result4);