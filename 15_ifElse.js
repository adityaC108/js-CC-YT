// if...else in javascript

// Syntax
if (condition) {
    
} else {

}

/* 
Comparison operators:-

< Less than
> Greater than
<= Less than equal
>= Greater than equal
== Equal (Returns true if the operands are equal)
!= Not equal (Returns true if the operands are not equal)
=== Strict equal (Returns true if the operands are equal and of the same type)
!== Strict not equal (Returns true if the operands are of the same type but not equal, or are of different type)
*/

const temp = 30
if (temp < 50) {
    console.log("Temperature is Less than 50"); // Output:- Temperature is Less than 50
}
console.log("Temperature is greater than 50"); // Output:- Temperature is greater than 50

const temp1 = 30
if (temp1 < 50) {
    console.log("Temperature is Less than 50"); // Output:- Temperature is Less than 50
} else {
    console.log("Temperature is greater than 50");
}
console.log("Exit"); // Output:- Exit

const score = 100
if (score > 50) {
    let activity = "Studying"
    console.log(`User is: ${activity}`); // Output:- User is: Studying
}
console.log(`User is: ${activity}`); // Output:- activity is not defined

// Shorthand notation for if...else

const balance = 500
if (balance > 100) console.log("Yes"); // Output:- Yes (Implicit scope)

// Nesting

const balance1 = 1000 
if (balance1 < 500) {
    console.log("Less than");
} else if (balance1 < 750) {
    console.log("Less than 750");
} else if (balance1 < 900) {
    console.log("Less than 900");
} else {
    console.log("Less than 900"); // Output:- Less than 900
}

/*
Real-life example:-
We've created a account on website to buy a course.
*/

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoggedIn && debitCard) {
    console.log("Allow to buy course"); //  Output:- Allow to buy course
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in"); // Output:- User logged in
}
