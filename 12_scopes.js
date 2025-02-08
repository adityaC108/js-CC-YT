// Global and local (block) scope in javascript

var z = 100 // Global scope

if (true) { // Code written inside the "if" is a block scope
    let x = 50
    const y = 60
    var z = 70
}
console.log(x); // Output:- Error: x is not defined
console.log(y); // Output:- Erroe: y is not defined
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

// Nested scope

function one() {
    const userName = "Victor"

    function two() {
        const website = "Netflix"
        console.log(userName);
    }
    console.log(website); // Output:- Error: website is not defined
    two() // Output:- Victor
}
one() // Won't execute

if (true) {
    const userName = "Benji"
    if (userName === "Benji") {
        const website = " Spotify"
        console.log(userName + website); // Output:- Benji Spotify
    }
    console.log(website); // Output:- Error: website is not defined
}
console.log(userName); // Output:- Error: userName is not defined

// Techniques of functions

// One
function addOne(num) {
    return num + 1
}
console.log(addOne(3)); // Output:- 4

console.log(addTwo(5)) // Output:- 6
function addTwo(num) {
    return num + 1
}

// Two
const addThree = function(num) {
    return num + 2
}
addThree(7) // Output:- Will Execute

addFour(7) // Output:- Error: Cannot access 'addFour' before initialization
const addFour = function(num) {
    return num + 2
}
