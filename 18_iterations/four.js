// forin loop in javascript

// Syntax
for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'
}
for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]} `);
}

/*
Output:-
js shortcut is for Javascript 
cpp shortcut is for C++ 
rb shortcut is for Ruby
swift shortcut is for Swift by Apple
*/

const programming = ["js", "java", "py", "cpp"]
for (const key in programming) {
    console.log(programming[key]); // Output:- js java py cpp (Output will be displayed vertically)
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

for (const key in map) {
    console.log(key); // Output:- won't give anything (Map is not iterable)
}