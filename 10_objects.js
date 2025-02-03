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

// Objects Constructor (Singleton)

// Difference between the declaration (**Interview question**)
const tinderUser = new Object() // singleton object 
console.log(tinderUser); // Output:- {}

const tinderUser0 = {} // non-singleton object
console.log(tinderUser0); // Output:- {}

const tinderUser1 = {} 
tinderUser1.id = "567pqr"
tinderUser1.name = "Sergey"
tinderUser1.isLoggedIn = false
console.log(tinderUser1); // Output:- { id: '567pqr', name: 'Sergey', isLoggedIn: false }

// Object inside object
const regularUser = {
    email: "sergey@gmail.com",
    fullName: { // object
        userFullName: { // object
            firstName: "Sergey",
            lastName: "Prior"
        }
    }
}
console.log(regularUser.fullName); // Output:- { userFullName: { firstName: 'Sergey', lastName: 'Prior' } }
console.log(regularUser.fullName.userFullName); // Output:- { firstName: 'Sergey', lastName: 'Prior' }
console.log(regularUser.fullName.userFullName.firstName); // Output:- Sergey

// Merge two or more objects together
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {obj1, obj2}
console.log(obj3); // Output:- { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4); // Output:- { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj5 = {...obj1, ...obj2} // preferred way
console.log(obj5); // Output:- { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// Objects inside array (basic, when values come from the database)
const users = [
    {
        id: 5,
        email: "id5@gmail.com"
    },
    {
        id: 6,
        email: "id6@gmail.com"
    },
    {
        id: 7,
        email: "id7@gmail.com"
    }
]
// users[5].email

console.log(tinderUser1); // Output:- { id: '567pqr', name: 'Sergey', isLoggedIn: false }
console.log(Object.keys(tinderUser1)); // Output:- [ 'id', 'name', 'isLoggedIn' ] (the output values datatype is array)
console.log(Object.values(tinderUser1)); // Output:- [ '567pqr', 'Sergey', false ]
console.log(Object.entries(tinderUser1)); // Output:- [ [ 'id', '567pqr' ], [ 'name', 'Sergey' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser1.hasOwnProperty('isLoggedIn')); // Output:- true
console.log(tinderUser1.hasOwnProperty('isLogged')); // Output:- false
