// Array in javascript

// JavaScript array-copy operations create shallow copies. (**Interview question**)
// Declaration of Array
const myArr = [21, 22, 23, 24, 25]
console.log(myArr[0]); // Output:- 21

const myLang = ["Hindi", "Marathi", "English"]
console.log(myLang[2]); // Output:- English

const myArr1 = new Array(85, 86, 87, 88, 89, 90)
console.log(myArr1[4]); // Output:- 89

// Methods in array

myArr.push(26) // adds element to the array
console.log(myArr); // Output:- [ 21, 22, 23, 24, 25, 26 ]

myArr.push(27)
console.log(myArr); // Output:- [ 21, 22, 23, 24, 25, 26, 27]

myArr.pop() // removes the last element from the array
console.log(myArr); // Output:- [ 21, 22, 23, 24, 25, 26 ]

myArr.unshift(20)
console.log(myArr); // Output:- [ 20, 21, 22, 23, 24, 25 ]

myArr.shift()
console.log(myArr); // Output:- [ 21, 22, 23, 24, 25 ]

const myArr2 = [36, 37, 38, 39, 40]
console.log(myArr2.includes(35)); // Output:- false
console.log(myArr2.includes(38)); // Output:- true

console.log(myArr2.indexOf(40)); // Output:- 4

const newArr = myArr.join()
console.log(myArr); // Output:- [ 21, 22, 23, 24, 25 ]
console.log(newArr); // Output:- 21,22,23,24,25
console.log(typeof newArr); // Output:- string

const newArr1 = [71, 72, 73, 74, 75]
console.log("A ", newArr1); // Output:- A  [ 71, 72, 73, 74, 75 ]

// Difference between slice and splice (**Interview question**)
/*
The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
The original array will not be modified.
*/
const newArr2 = newArr1.slice(1, 3)
console.log(newArr2); // Output:- [ 72, 73 ]

console.log("B ", newArr1); // Output:- B  [ 71, 72, 73, 74, 75 ]

/*
The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
*/
const newArr3 = newArr1.splice(1, 3)
console.log("C ", newArr1); // Output:- C  [ 71, 75 ]
console.log(newArr3); // Output:- [ 72, 73, 74 ]