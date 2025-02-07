// Global and local (block) scope in javascript

var z = 100 // Global scope

if (true) { // Code written inside the "if" is a block scope
    let x = 50
    const y = 60
    var z = 70
}
// console.log(x); // Output:- x is not defined
// console.log(y); // Output:- y is not defined
console.log(z); // Output:- 70 (this is the problem with var, 70 should not be printed)

/*
Values written outside the block scope are called as global scope.
Any value written in the global scope is available inside block scope.
But value written inside the block scope should not go outside the block scope.
*/

let x = 80

if (true) {
    let x = 120
    const y = 30
    console.log("Block:", x); // Output:- Block: 120
}
console.log("Global:", x); // Output:- Global: 80

/*
(**Interview question**) 
Browser -> Inspect -> Console, here the global scope is different.
And in a code environment running a example through node, here the global scope is different.
*/