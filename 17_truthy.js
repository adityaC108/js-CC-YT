// truthy and falsy values in javascript

const userEmail = "Tanay@gmail.com" // Here string is true value so it is truthy value
if (userEmail) {
    console.log("Got user email"); // Output:- Got user email
} else {
    console.log("Don't have user email");
}

const userEmail1 = []
if (userEmail1.length === 0) {
    console.log("Array is empty"); // Output:- Array is empty
}

const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty"); // Output:- Object is empty
    
}

/* (**Interview question**)

List of truthy values:- "0", 'false', " ", [], {}, function(){}

List of falsy values:- false, 0, -0, BigInt 0n, "", null, undefined, NaN

In the browsers console if we compare:- 
false == 0 it gives true
false == '' it gives true
0 == '' it gives true
*/

/*
Nullish Coalescing Operator (??):-

The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when
its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
*/

let val1;
val1 = 3 ?? 5
console.log(val1); // Output:- 3

let val2;
val2 = null ?? 7
console.log(val2); // Output:- 7

let val3;
val3 = undefined ?? 9
console.log(val3); // Output:- 9

let val4;
val4 = null ?? 16 ?? 23
console.log(val4); // Output:- 16

// Ternary Operator (Shorthand for if-else)

// Syntax
condition ? true : false

const juicePrice = 75
juicePrice <= 50 ? console.log("Less than 50") : console.log("More than 50"); // Output:- More than 50