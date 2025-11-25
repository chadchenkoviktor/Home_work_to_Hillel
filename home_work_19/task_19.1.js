// Task 19.1
const task = 'task № 19.1';
console.log(task);

function kelvinToCelsius(kelvin){
        return Math.round(kelvin - 273.15);
    }

const changeCitys = document.querySelector('.citys');
const viewData = document.querySelector('.data');
const button = document.querySelector('.but');
const lableBut = document.querySelector('.lableBut');

changeCitys.addEventListener('click', function(event) {
    if(event.target.className === 'har') {
        const response = fetch('https://api.openweathermap.org/data/2.5/weather?lat=49.988358&lon=36.232845&appid=c436c17a3ddf0e3e0b06b33dc7475796');
        response.then(resp => resp.json())
        .then((data) => {
            viewData.textContent = `Температура в Харькове: ${kelvinToCelsius(data.main.temp)}°C, ${new Date}`;
        })
        .catch(error => viewData.textContent = 'Ошибка загрузки данных');

    } else  if(event.target.className === 'ki') {
        const response = fetch('https://api.openweathermap.org/data/2.5/weather?lat=50.4500001&lon=30.523333&appid=c436c17a3ddf0e3e0b06b33dc7475796');
        response.then(resp => resp.json())
        .then((data) => {
            viewData.textContent = `Температура в Киеве: ${kelvinToCelsius(data.main.temp)}°C, ${new Date}`;
        })
        .catch(error => viewData.textContent = 'Ошибка загрузки данных');

    } else  if(event.target.className === 'pol') {
        const response = fetch('https://api.openweathermap.org/data/2.5/weather?lat=49.589542&lon=34.551273&appid=c436c17a3ddf0e3e0b06b33dc7475796');
        response.then(resp => resp.json())
        .then((data) => {
            viewData.textContent = `Температура в Полтаве: ${kelvinToCelsius(data.main.temp)}°C, ${new Date}`;
        })
        .catch(error => viewData.textContent = 'Ошибка загрузки данных');
    }
})

button.addEventListener('click', function () {
    lableBut.textContent = 'Данные обновляются при выборе города!'
})
