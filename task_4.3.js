const carentYear = 2025;
const userYear = Number(prompt('Укажите ваш год рождения'));
const hobby = prompt('Каким видом спорта вы увлекаетесь?');
let city; 
let message;

switch (city = prompt('Укажите ваш город проживания')) {
    case 'Киев':
        city = 'Киеве столице Украины';
        break;
    case 'Вашингтоне':
        city = 'Вашингтоне столице США';
        break;
    case 'Лондон':
        city = 'Лондоне столице Великобритании';
        break;
    default:
        city;
}

if (hobby == 'футбол' || hobby == 'футболом') {
    message = 'Футбол это круто! Хочешь играть как Пеле?';
} else if (hobby == 'бокс' || hobby == 'боксом') {
    message = 'Бокс это круто! Хочешь боксировать как Усик?';
} else if (hobby == 'Шахматы' || hobby == 'Шахматами') {
    message = 'Шахматы это круто! Хочешь побеждать как Каспаров?';

} else {
    message = 'Не плохо, но придется с тобой поработать?';
}

if (userYear == null || city == null || hobby == null) {
    alert('Вы ввели не все данные, поэтому информация о вас будет не полной и вам желательно ответить на все вопросы');
}

alert(`Вы родились в ${userYear} году и вам сейчас ${carentYear - userYear}, вы проживаете в ${city} и увлекаетесь ${hobby}. ${message}`);