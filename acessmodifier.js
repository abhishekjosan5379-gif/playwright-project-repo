"use strict";
console.log('****************PUBLIC***********');
class Student {
    name = "Abhi";
    display() {
        console.log(this.name);
    }
}
let obj = new Student();
obj.display();
console.log(obj.name);
console.log("*********PRIVATE*********");
class Bank {
    balance = 3000;
    bal() {
        console.log(this.balance);
    }
}
let obj1 = new Bank();
obj1.bal();
//console.log(obj1.balance)
console.log("************PROTECT*****");
class Animal {
    name = "Lion";
    show() {
        console.log(this.name);
    }
}
class Bird extends Animal {
    display() {
        console.log(this.name);
    }
}
let obj2 = new Bird();
obj2.show();
obj2.display();
