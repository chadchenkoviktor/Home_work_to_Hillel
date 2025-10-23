task = 'task № 8.2';
console.log(task);

function Car (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

const myCar = new Car('Toyota', 'camry', 2022);
console.log(myCar);