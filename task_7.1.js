// Task 7.1
task = 'task № 7.1';
console.log(task);

let string = prompt('Введите слово или фразу');
let leter1 = prompt('Введите букву которую будем удалять');
let leter2 = prompt('Введите букву которую будем удалять');

function delitLeterFromWord (word, ...manyArgs) {
     let newWord2;
     let newWord3;
     let newWord = word.split('');
     console.log(newWord);
     let indexFirstDelEl = newWord.indexOf(...manyArgs);
     if (indexFirstDelEl > -1) {
          newWord2 = newWord.splice(indexFirstDelEl, 1);
          console.log(newWord2); 
     }

     let indexFirstDelEl2 = newWord.indexOf(leter2);
      if (indexFirstDelEl2 > -1) {
           newWord3 = newWord.splice(indexFirstDelEl2, 1);
           console.log(newWord3);
      } 
      
      let newStrWord = newWord.join('');
          return console.log(newStrWord), alert(newStrWord); 
     
}

delitLeterFromWord(string, leter1, leter2);