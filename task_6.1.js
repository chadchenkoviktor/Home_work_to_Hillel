// Task 6.1
task = 'task № 6.1';
console.log(task);

const user = {
     name: 'Ihor',
     age: 20,
     address: { 
          city: 'Kiyev', 
          street: 'Giroyev', 
          home: 22, 
          apartment: 125,
     },

     getViewUser: function() {
          return (`Name: ${this.name}, Age: ${this.age}, Plase of residence: city ${this.address.city}, street ${this.address.street}, home ${this.address.home}, ap. ${this.address.apartment}`)
     }

}

const info = user.getViewUser();
console.log(info);