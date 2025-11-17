// Task 17.2
task = 'task № 17.2';
console.log(task);

class Coach {
    constructor (name, specialization, rating) {
        this.name = name;
        this.specialization = specialization;
        this.rating = rating;
    }
    
    displayInfo() {
        console.log(`Coach: ${this.name}, ${this.specialization}, ${this.rating}`)
    }
}

let num = Math.random()*5;
let rating = num.toFixed(1); 

const coach1 = new Coach ('John Doe', 'fitness', rating);
console.log(coach1);
const coach2 = new Coach ('Alice Smith', 'Yoga', 4.9);
console.log(coach2);

