// this keyword and arrow functions in javascript

// this keyword is used to refer the current context(values the variable is holding)
const user = {
    userName: "Simon",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.userName}, welcome to the website`);
    }
}
user.welcomeMessage() // Output:- Simon, welcome to the website
user.userName = "Wilhelm"
user.welcomeMessage() // Output:- Wilhelm, welcome to the website
console.log(this); // Output:- {} (In the node environment this keyword is referring {} empty object because now there is no global context)
// The global object inside the browser is "Window object" (**Interview question**)

function juice() {
    let userName = "Simon"
    console.log(this.userName);
}
juice() // Output:- undefined

const juice = function() {
    let userName = "Simon"
    console.log(this.userName);
}
juice() // Output:- undefined

// Declare function using arrow function

const juice = () => {
    let userName = "Wilhelm"
    console.log(this.userName);
}
juice() // Output:- undefined

// Explicit return
const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(2, 3)); // Output:- 5

// Implicit return
const addTwoNum = (num1, num2) => num1 + num2 // One way
console.log(addTwo(3, 4)); // Output:- 7

const addTwoNo = (num1, num2) => (num1 + num2) // Another way
console.log(addTwo(4, 5)); // Output:- 9

//Object return
const addNum = (num1, num2) => ({userName: "Wilhelm"})
console.log(addNum(3, 4)); // Output:- { userName: 'Wilhelm' }