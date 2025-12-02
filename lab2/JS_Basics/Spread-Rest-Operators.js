// Spread opearator 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6]; 

const combined = [...arr1, ...arr2];
const copy = [arr1, 5, 6];

const withExtra = [...arr1, 4, 5];
const numbers = [10, 20, 30, 40, 50];
console.log({combined, copy, withExtra});

// Spread in objects
const person = {
    name: 'Alice',
    age: 30
};
const address = {
    city: 'New York',
    country: 'USA'
};
const fullProfile = {...person, ...address};
const updated = {...person, age: 31, email: "alice@example.com"};
console.log({fullProfile, updated});

// Rest operator
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log({first, second, rest});

// Rest in objects
const user = {name: 'Bob', age: 25, city: 'Los Angeles', job: 'Developer'};
const {name, age, ...otherInfo} = user;
console.log({name, age, otherInfo});
