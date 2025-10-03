const num = prompt('Введи трехзначное число');
            num.split('');

if (num[0] == num[1] && num[1] == num[2] && num[0] == num[2]) {
    alert('Все три числа одинаковые');
} else if (num[0] != num[1]){
    alert('Первые два числа не одинаковые');
} else if (num[1] != num[2]){
    alert('Вторая пара чисел не одинаковые');
}