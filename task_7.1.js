// Task 7.1
task = 'task № 7.1';
console.log(task);

const line = prompt("Вкажіть ваш рядок");
const letters = [];
while (true) {    
    const letter = prompt("Вкажіть букву яку необхідно прибрати з рядка");
    if(!letter) break;
    letters.push(letter);
}

function deleteLettersFromWord (line, letters) {
     let newWord;
     let el;

      newWord = line.split('');
     console.log(newWord);

     for (let i = 0; i < letters.length; i++) {
           el = letters[i];
           console.log(el);

          for (let i = 0; i < newWord.length - 1; i++) {

               let inEl = newWord.indexOf(el);

               if (inEl > -1) {
                    newWord.splice(inEl, 1); 
               }
          }
     }

            let newStrWord = newWord.join('');
            
     return console.log(newStrWord), alert(newStrWord); 
     
}

deleteLettersFromWord(line, letters);