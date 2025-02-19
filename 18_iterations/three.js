// forof loop and map in javascript

// Syntax
for (const element of object) {
    
}

const arr = [6, 7, 8, 9, 10]
for (const num of arr) {
    console.log(num); // Output:- 6 7 8 9 10 (Output will be displayed vertically)
}

const greetings = "Hey There!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

/*
Output:-
Each char is H
Each char is e
Each char is y
Each char is
Each char is T
Each char is h
Each char is e
Each char is r
Each char is e
Each char is !
*/

// Maps

/*
The Map object holds key-value pairs and remembers the original insertion order of the keys. 
Any value (both objects and primitive values) may be used as either a key or a value.
A key in the Map may only occur once; it is unique in the Map's collection.
*/

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
console.log(map);

/*
Output:-
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/

for (const [key, value] of map) { // After using [key, value] now array is destructured
    console.log(key, ':-', value);
}

/*
Output:-
IN :- India
USA :- United States of America
Fr :- France
*/

const myObject = {
    'sport1': 'Basketball',
    'sport2': 'Badminton',
    'sport3': 'Cricket'
}
for (const [key, value] of myObject) {
    console.log(key, ':-', value); // Output:- myObject is not iterable
}