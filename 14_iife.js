// Immediately Invoked Function Expression (IIFE) in javascript

// ()() :- syntax (first() is for function definition and second() is for execution call)

// Named IIFE
(function juice() {
    console.log(`DB connected`);
})(); // Output:- DB connected (here ; is explicitly added to end the code)

/* (**Interview question**)
IIFE is a javascript function which runs as soon as it is defined.
IIFE is used because sometimes due to pollution from global scope it creates problem,
so to remove pollution from global scope variables or any other declaration we use IIFE.
*/

// Unnamed/ Simple IIFE using arrow function
( () => {
    console.log(`Second DB connected`);
})(); // Output:- Second DB connected

// Unnamed IIFE using arrow function with variable, parameter passed
( (name) => {
    console.log(`Third DB connected ${name}`);
})('MySQL') // Output:- Third DB connected MySQL