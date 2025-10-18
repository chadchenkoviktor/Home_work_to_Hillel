// Task 9.1
task = 'task № 9.1';
console.log(task);

  
let ladder = {
  stepCounter: 10,
  up: function () {
    let stepUp = this.stepCounter++;
    return  stepUp;
  },
  down: function () {
    let stepDown = this.stepCounter--;
    return  stepDown; 
  },
  showStep: function () {
    return this.stepCounter; 
  }
};

console.log(ladder.up());
console.log(ladder.up());
console.log(ladder.up());
console.log(ladder.up());
console.log(ladder.down());
console.log(ladder.down());

console.log(ladder.showStep());
console.log(ladder.showStep());

let ladder2 = {
  stepCounter: 10,
  up: function () {
    this.stepCounter += 1;
    return  this;
  },
  down: function () {
    this.stepCounter -= 1;
    return  this; 
  },
  showStep: function () {
    return this.stepCounter; 
  }
};

console.log(ladder2.up().down().down().showStep());