// Task 17.3
task = 'task № 17.3';
console.log(task);

class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    getBalance () {
        console.log(`На вашому рахунку: ${this.balance} грн.`);
    }

    deposit (refill) {
        console.log(`Ви поповнили свій рохунок на: ${refill} грн.`);
        this.balance += refill;
        console.log(`Тепер на вашому рахунку: ${this.balance} грн.`); 
        
    }

     withdraw (spending) {
        console.log(`Ви зняли зі свого рохунку: ${spending} грн.`);
        this.balance -= spending;
        console.log(`Тепер на вашому рахунку: ${this.balance} грн.`); 
        
    }
}

const personalAccount = new BankAccount(1000);
console.log(personalAccount);
console.log(personalAccount.getBalance());
console.log(personalAccount.deposit(200));
console.log(personalAccount.withdraw(100));
console.log(personalAccount.deposit(400));

const personalAccount2 = new BankAccount(700);
console.log(personalAccount2);
console.log(personalAccount2.getBalance());
console.log(personalAccount2.deposit(200));
console.log(personalAccount2.withdraw(100));
console.log(personalAccount2.deposit(400));