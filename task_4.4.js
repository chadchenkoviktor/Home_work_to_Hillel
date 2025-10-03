switch (numOrStr = prompt('Введите чайник или 123')) {
    case null:
        alert('Ви скасували');
        break;
    case '':
        alert('Empty String');
        break;
    case 'чайник':
        alert('Вы заказали чайник');
        break;
    case '123':
        alert('Вы ввели число');
        break;
    default:
        alert('Ок! Это тоже вариант )');
}