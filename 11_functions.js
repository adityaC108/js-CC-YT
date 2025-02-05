// Functions in javascript

// Definition
function myName(){
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("A");
}
// Call ("myName" is reference, "myName()" is execution)
myName() // Output:- A D I T Y A (every character will come vertically one after the other)

function addNumbers(num1, num2){
    console.log(num1 + num2);
    
}
addNumbers(4, 5) // Output:- 9

function addTwoNumbers(num1, num2){
    return num1 + num2
    
}
const result = addTwoNumbers(10, 6)
console.log("Result: ", result); // Output:- Result:  16

/* 
When we create a function definition, that time whatever we take as input in () it is known as parameter.
When we call a function, that time whatever values we pass in () it is known as argument.
*/

// 
function loginUserMessage(userName){
    return `${userName} has just logged in`
}
console.log(loginUserMessage("Aditya")); // Output:- Aditya has just logged in
console.log(loginUserMessage("")); // Output:- has just logged in
console.log(loginUserMessage()); // Output:- undefined has just logged in (**Interview question**)

function loginUser(userName){
    if(!userName){ // another way is if(userName === undefined)
        console.log("Please enter a username");
        return
    }
}
console.log(loginUser()); // Output:- Please enter a username  undefined
// ! (Not) it converts True to False and False to True

// If user doesn't pass any username, we can assign default values
function loginUser1(userName = "Patrick"){
    if(!userName){ // another way is if(userName === undefined)
        console.log("Please enter a username");
        return
    }
    return `${userName} has just logged in`
}
console.log(loginUser1()); // Output:- Patrick has just logged in
console.log(loginUser1("Evan")); // Output:- Evan has just logged in (value is overwritten)