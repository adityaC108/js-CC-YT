// while and do while loop in javascript

// Syntax
while (condition) {
    
}

let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}

/*
Output:- 
Value of index is 0
Value of index is 2
Value of index is 4
Value of index is 6
Value of index is 8
Value of index is 10
*/

let myArray = ["Netflix", "Facebook", "Instagram"]
let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

/*
Output:-
Value is Netflix
Value is Facebook
Value is Instagram
*/

// Syntax
do {
    
} while (condition);

let score = 1
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);

/*
Output:-
Score is 1
Score is 2
Score is 3
.....(It will print till the score is 10)
*/

let score1 = 11
do {
    console.log(`Score is ${score}`); // Output:- Score is 11
    score++
} while (score <= 10);