// Data types in javascript

"use strict"; // treats all JS code as newer version

// alert(2 + 3) // we are using node.js, not the browser
console.log(2 + 3) // shows the output in the terminal

/*
MDN:- https://developer.mozilla.org/en-US/ (Easy documentation but it's not an original documentation)
ECMA standard:- https://tc39.es/ecma262/ (Original documentation)
*/

let name = "Henry"
let age = 20
let isLoggedIn = false

/*
1) Primitive data types:

number:- range
bigint
string:- can be written in both ' ' or " "
boolean:- true/ false
null:- means empty, it's a standalone value
undefined:- not yet defined
symbol:- used for unique

2) Non-primitive data types:

object
*/

console.log(typeof name)
console.log(typeof age)
console.log(typeof isLoggedIn)
console.log(typeof null) // Output:- object (It's type is object)
console.log(typeof undefined) // Output:- undefined (It's a type in JS)