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

function calculateCartPrice(...num1){ // rest and spread operator
    return num1
}
console.log(calculateCartPrice(150, 300, 500, 1000)); // Output:- [ 150, 300, 500, 1000 ]

function calculateCartPrice1(val1, val2, ...num1){ // (**Interview question**)
    return num1
}
console.log(calculateCartPrice1(150, 300, 500, 1000)); // Output:- [ 500, 1000 ] (150 is taken by val1, 300 is taken by val2 and rest all is taken by the array)

// Pass object in the function and use it
 const user = {
    userName: "Oliver",
    price: 1999
 }

 function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
 }
 handleObject(user) // Output:- Username is Oliver and price is 1999

handleObject({ // other way of passing object
    userName: "Elio",
    price: 2999
 }) // Output:- Username is Elio and price is 2999

// Pass array in the function and use it
const myNewArray = [250, 350, 450, 550]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray)); // Output:- 350

console.log(returnSecondValue([650, 750, 850, 950])); // other way of passing array. Output:- 750
