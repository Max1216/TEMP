// String
const greeting = "Hello, World!";
const nameJ = 'John';
const template = `Hello ${nameJ}.`;
console.log(greeting, template);

// Number
const integer = 42;
const decimal = 3.14;
const negative = -10;
const scientific = 2.5e6; // 2500000
console.log({integer, decimal, negative, scientific});

// Boolean
const isActive = true;
console.log({isActive, equalsOne: (isActive == 1), equalsZero: (isActive == 0)});

// Undefined
let x;
console.log("x:", x);
console.log("Type of x:", typeof x);

// Null
const empty = null;
console.log("empty:", empty);
console.log("Type of empty:", typeof empty);

//Object
const person = {
    name: "Alice",
    age: 30,
    isStudent: false
};
console.log(person);

// Array
const colors = ["red", "green", "blue"];
const mixed = [1, "two", true, {key: "value"}];
console.log({colors, mixed});
