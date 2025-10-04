const numOrStr = prompt('Input number or string');

switch (true) {
    case numOrStr === null:
        console.log('Ви скасували');
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('Ok!');
} 