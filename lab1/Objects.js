// Creating objects
const person = {
    name: "Alice",
    age: 30,
    city: "New York",
    isStudent: false,
    hobbies: ["reading", "coding"]
};
console.log(person);

// Accessing elements
console.log(person.name, person['age'], person.hobbies[0]);

// Modifying elements
person.email = "alice@example.com";
person.age = 31;
console.log(person);

// Deleting elements
const personCopy = {...person};
delete personCopy.city;
console.log(personCopy);

// Checking properties
console.log("'name' in person:", 'name' in person);
console.log("hasOwnProperty('age'):", person.hasOwnProperty('age'));

// Object methods
const user = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    greet() {
        return `Hello, ${this.firstName}!`;
    }
};
console.log(user.fullName(), user.greet());

//Destructiuring
const {firstName : fName, lastName, age = 25} = user;
console.log({fName, lastName, age});

// Object Methods - Keys, Values, Entries
const product = {
    name: "Laptop",
    price: 999.99,
    stock: 50,
};
console.log(Object.keys(product));
console.log(Object.values(product));
console.log(Object.entries(product));