"use strict";
let furits = ["apple", "grape", "lemon", "orange"];
console.log(furits[1]);
console.log(furits.length);
console.log("***********************");
class Calculator {
    add(a, b) {
        let c = a + b;
        return c;
    }
    multiplication(a, b) {
        let c = a * b;
        return c;
    }
    division(a, b) {
        let c = a / b;
        return c;
    }
}
const obj = new Calculator();
obj.add(5, 10);
console.log(obj.add(5, 10));
