// Conversion operations on data types

let score = "50" // Number

// Two ways to find the typeof
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber); // Output:- 50


let score0 = "50abc" // Number

console.log(typeof score0);
console.log(typeof(score0));

let valueInNumber0 = Number(score0)
console.log(typeof(valueInNumber0));
console.log(valueInNumber0); // Output:- NaN (Not a Number), here the value is Nan but the type is number


let score1 = null

console.log(typeof score1);
console.log(typeof(score1));

let valueInNumber1 = Number(score1)
console.log(typeof(valueInNumber1));
console.log(valueInNumber1); // Output:- 0


let score2 = undefined

console.log(typeof score2);
console.log(typeof(score2));

let valueInNumber2 = Number(score2)
console.log(typeof(valueInNumber2));
console.log(valueInNumber2); // Output:- NaN


let score3 = true

console.log(typeof score3);
console.log(typeof(score3));

let valueInNumber3 = Number(score3)
console.log(typeof(valueInNumber3));
console.log(valueInNumber3); // Output:- 1


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // Output:- true


let isLoggedIn0 = ""

let booleanIsLoggedIn0 = Boolean(isLoggedIn0)
console.log(booleanIsLoggedIn0); // Output:- false


let isLoggedIn1 = "Alex"

let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1); // Output:- true


let someNumber = 50

let stringNumber = String(someNumber)
console.log(stringNumber); // Output:- 50
console.log(typeof stringNumber);