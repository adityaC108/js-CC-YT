// Objects in javascript

/*
There are two way to declare an object: (**Interview question**)
i) literal
ii) constructor (singleton is made from constructor)
*/

// Object literals

// Take a symbol, define that symbol, add that symbol in the object key and print it? (**Interview question**)
const mySym = Symbol("key1")

const User = {
    name: "Roman",
    "full name": "Roman Matwiejew",
    [mySym]: "myKeys",
    age: 30,
    location: "London",
    email: "roman@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Friday"]
}
// Accessing objects
console.log(User.email); // Output:- roman@google.com
console.log(User["email"]); // Output:- roman@google.com
console.log(User["full name"]); // Output:- Roman Matwiejew
console.log(User[mySym]); // Output:- myKeys

User.email = "roman@yahoo.com"
console.log(User["email"]); // Output:- roman@yahoo.com

// Lock the values so that no one can change it
Object.freeze(User)
User.email = "roman@microsoft.com" // won't execute because we've freezed the object
console.log(User); // Output:- {name: 'Roman', 'full name': 'Roman Matwiejew', age: 30, location: 'London', email: 'roman@yahoo.com', isLoggedIn: false, lastLoginDays: [ 'Monday', 'Friday' ], [Symbol(key1)]: 'myKeys'}

// Function
User.greeting = function() {
    console.log("Hello Users");
}
console.log(User.greeting); // Output:- [Function (anonymous)] (here function is not executed, only the reference of the function is displayed)
console.log(User.greeting()); // Output:- Hello Users

// Reference the "name" in the object 
User.greetingTwo = function() {
    console.log(`Hello Users, ${this.name}`); // reference to the same object we write "this"
}
console.log(User.greetingTwo()); // Output:- Hello Users, Roman