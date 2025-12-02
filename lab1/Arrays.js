// creating Arrays
const fruits = ['Apple', 'Banana', 'Cherry'];
const numbers = [1, 2, 3, 4, 5];
const empty = [];
const mixed = [1, 'Two', true, null, {key: 'value'}];
console.log({fruits, numbers, empty, mixed});

// accessing Elements by Index
console.log(fruits[0], fruits[2], fruits[10]); // unfined for index 10

// Array Properties
console.log("Length:", fruits.length, "isArray:", Array.isArray(fruits));

// adding Elements
const fruitsCopy = [...fruits];
fruitsCopy.push('grape'); // ['Apple', 'Banana', 'Cherry', 'grape']
console.log(fruitsCopy);

// removing Elements
const last = fruitsCopy.pop();
const first = fruitsCopy.shift();
console.log("Removed:", last, first, "Remaining:", fruitsCopy);

//Searching Elements
console.log("Index of Banana:", fruits.indexOf('Banana'));
console.log("Includes Cherry:", fruits.includes('Cherry'));   

// for each Loop
fruits.forEach(fruit => console.log("  -", fruit));