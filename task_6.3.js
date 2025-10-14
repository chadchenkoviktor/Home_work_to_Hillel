task = 'task № 6.3';
console.log(task);

const familiars = {
    contacts: [
        {
            name: 'Gena',
            surname: 'Stolyarov',
            jobTitle: 'stolyar',
            fone: '345-45-63',
            email:'Gena@gmail.com',
            
            
        },
        {
             name: 'Marina',
            surname: 'Fomina',
            jobTitle: 'merchandiser',
            fone: '567-32-12',
            email:'Fomina.M.@gmail.com',
        },
        {
             name: 'Anton',
            surname: 'Slepakov',
            jobTitle: 'stendaper',
            fone: '987-89-11',
            email:'Toha@gmail.com',
        },
        {
             name: 'Sergey Michaylovich',
            surname: 'Zubko',
            jobTitle: 'strech ceilings',
            fone: '675-99-20',
            email:'Zubko@gmail.com',
        },
        {
             name: 'Tetyana',
            surname: 'Cuzina',
            jobTitle: "hairdresser's",
            fone: '809-16-17',
            email:'Cuzina@gmail.com',
        },
    ],

    getContact: function(name) {
        for (const item of this.contacts) {
           const res = Object.values(item);
           if (res[0] === name) {
            return(item);
            }
        }   
    },

    addContact (newPerson) {
        const six = this.contacts.push(newPerson);
        console.log (this.contacts);
        for (const newArray of this.contacts) {
          console.log(newArray);
        }
        return six;
    },
}

console.log(familiars.getContact('Gena'));

let newPerson = {
            name: 'Goga',
            surname: 'Aboyan',
            jobTitle: "dgigit",
            fone: '666-16-15',
            email:'Goga@gmail.com',
        }

console.log(familiars.addContact(newPerson));        