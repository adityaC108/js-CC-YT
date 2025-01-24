// Comparison operations

console.log(9 > 5);
console.log(9 >= 5);
console.log(9 < 5);
console.log(9 <= 5);
console.log(9 == 5);
console.log(9 != 5);

/*
While comparison make sure that the operands must be of same datatype otherwise sometimes the comparison won't give the predictable output
Here in both case JS has automatically converted the string into number
*/
console.log("9" > 5); // Output:- true
console.log("09" > 5); // Output:- true

/*
An equality check == and comparison >, >=, <, <= work differently
Comparison converts null to a number, treating it as 0
That's why null >= 0 is true and null > 0 is false
Avoid such type of comparisons
*/
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // null is converted to number as 0

// Here in all cases output will be false
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);

// Strict check ===, it checks the values as well as their datatypes
console.log("9" === 9); // Output:- false