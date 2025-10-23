task = 'task № 10.1';
console.log(task);

const company = {
    sales: [{name:'John', salary: 1000}, {name:'Bob', salary: 1500}],
    development: {
        web: [{name:'Olga', salary: 1050}, {name:'Peter', salary: 2000}],
        internals: {
            left: [{name:'Rony', salary: 800}, {name:'Kety', salary: 800}],
            right: [{name:'Bony', salary: 900}, {name:'Luiza', salary: 900}],
        } 
    }
}

function getSumSalaryes (object) {
    let sum = 0;
    if (Array.isArray(object)) {
        for (let item of object) {
            sum += getSumSalaryes(item);
        }
    } else if (typeof object === 'object' && object !== null) {
        for (let key in object) {
            sum += getSumSalaryes(object[key]);
        }
    } else if (typeof object === 'number') {
        sum += object;
    } else if (object.salary) {
        sum += object.salary;
    }
    return sum;
}
    
console.log(getSumSalaryes(company));