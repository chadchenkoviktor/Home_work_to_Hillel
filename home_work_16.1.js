task = 'task № 16.1';
console.log(task);

function Student (name, surname, birthYear, grades) {
    this.name = name,
    this.surname = surname,
    this.birthYear = birthYear,
    this.grades = grades,

    this.attendance = new Array(25).fill(null);
    this.attendanceIndex = 0;
}

Student.prototype.getAge = function() {
    return new Date().getFullYear() - this.birthYear;
}

Student.prototype.getAverageGrade = function() {
    if(!this.grades.length) return 0;
    return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
}

Student.prototype.present = function() {
    if(this.attendanceIndex >= 25) {
        console.log('Больше нельзя отмечать посещаемость');
        return;
    }
    this.attendance[this.attendanceIndex] = true;
    this.attendanceIndex ++;
};

Student.prototype.absent = function() {
    if(this.attendanceIndex >= 25) {
        console.log('Больше нельзя отмечать посещаемость');
        return;
    }
    this.attendance[this.attendanceIndex] = false;
    this.attendanceIndex ++;
}

Student.prototype.getAverageAttendance = function() { 
    const filled = this.attendance.filter(v => v !== null);
    if (!filled.length) return 0;
    const countTrue = filled.filter(v => v === true).length;
    return countTrue / filled.length;
}

Student.prototype.summery = function() {
    const avgGrade = this.getAverageGrade();
    const avgAtt = this.getAverageAttendance();
    if (avgGrade > 90 && avgAtt > 0.9) {
        return 'Молодец!';
    } else if (avgGrade > 90 || avgAtt > 0.9) {
        return 'Хорошо, но можно лучше';
    } else {
        return 'Редиска';
    }
}

const student1 = new Student('Genry','Kotov', 2000, [100, 95, 87, 92]);
const student2 = new Student ('Mery', 'Grase', 2001, [70, 65, 85, 75]);

student1.present();
student1.present();
student1.absent();

student2.absent();
student2.absent();
student2.present();

console.log(student1.name, student1.getAge(), student1.getAverageGrade());
console.log('Посещаемость 1:', student1.getAverageAttendance());
console.log('Итог:', student1.summery());

console.log(student2.name, student2.getAge(), student2.getAverageGrade());
console.log('Посещаемость 2:', student2.getAverageAttendance());
console.log('Итог:', student2.summery());