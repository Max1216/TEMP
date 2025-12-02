// Variable Hoisting - var
console.log(x); // Output: undefined
var x = 5;
console.log(x); 

// Variable Hoisting - let and const
let y = 10;
console.log(y); 
const z = 15;
console.log(z);

sayHello();
function sayHello() {
    console.log("Hello!");
}


function sayHello() {
    console.log("Hello!");
}

var greet = function() {
    console.log("Hi!");
};
greet();

// Function Expressions - let/const
const welcome = function() {
    console.log("Welcome!");   
};
welcome();

// Class Hoisting
class Person {
    constructor(name) {
        this.name = name;
    }
}

