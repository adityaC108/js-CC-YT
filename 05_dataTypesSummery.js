// How the data is been kept in the memory & how it is accessed on that bases data is been categorized in two types:

/* Primitive datatype:- (Call by value)
String, Number, Boolean, Null, Undefined, Symbol, Bigint
*/

// While using Symbol even if the values are same the result will be unique
const id = Symbol('0123')
const id1 = Symbol('0123')
console.log(id === id1); // Output:- false

const bigNumber = 875856097809658n // Bigint
console.log(typeof bigNumber); // Output:- bigint

/* Non-primitive datatype or Reference type
Array, Objects, Functions
*/

// Array
const country = ["India", "USA", "Germany"];
console.log(typeof country); // Output:- object

// Objects are written in key value pairs inside {} and it can have any datatypes
let myObj = {
    name: "Tim",
    age: 27,
}
console.log(typeof myObj); // Output:- object

// Function
const myFunction = function() {
    console.log("Good work");
}
console.log(typeof myFunction); // Output:- function

// https://262.ecma-international.org/5.1/#sec-11.4.3

/*
Javascript is dynamically typed language because variables do not have a fixed type.
The type of a variable is determined at runtime based on the value assigned to it.
We can assign different types of values to the same variable without explicitly declaring the type.
*/