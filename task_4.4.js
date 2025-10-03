const numOrStr = prompt('Input number or string');

switch (numOrStr) {
    case null:
        console.log('Ви скасували');
        break;
    case '':
        console.log('Empty String');
        break;
    case numOrStr:
        console.log('String'); 
} 