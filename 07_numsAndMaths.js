// Numbers and Maths in javascript

const score = 300
console.log(score); // Output:- 300

const balance = new Number(500)
console.log(balance); // Output:- [Number: 500]

console.log(balance.toString().length); // Output:- 3
console.log(balance.toFixed(2)); // Output:- 500.00 (precision value)

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)); // Output:- 23.9

const otherNumbers = 123.8966
console.log(otherNumbers.toPrecision(3)); // Output:- 124

const anotherNumber = 11123.8966
console.log(anotherNumber.toPrecision(3)); // Output:- 1.11e+4

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // Output:- 10,00,000 (default US standard)
console.log(hundreds.toLocaleString('en-IN')); // Output:- 10,00,000 (Indian standard)

// ********** Maths **********

console.log(Math); // Output:- Object [Math] {}

// Absolute value
console.log(Math.abs(-9)); // Output:- 9 (only sign changes)

// Round of value
console.log(Math.round(9.6)); // Output:- 10

// Ceiling value (gives top value)
console.log(Math.ceil(9.3)); // Output:- 10

// Flooring value (gives low value)
console.log(Math.floor(9.3)); // Output:- 9

console.log(Math.sqrt(25)); // Output:- 5
console.log(Math.min(2, 7, 4, 8, 1)); // Output:- 1
console.log(Math.max(2, 7, 4, 8, 1)); // Output:- 8

// .random() gives different values every time
console.log(Math.random()); // Output:- 0.8012166928349513 (the value will always come between 0 to 1)
console.log((Math.random() * 10) + 1); // Output:- 10.613285566838973
console.log(Math.floor(Math.random() * 10) + 1); // Output:- 3

const min = 40
const max = 60
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Output:- 46