// Strings in javascript

const name = "Hawk "
const repoCount = 10
console.log(name + repoCount + " Repositories"); // Old syntax

// String interpolation
console.log(`Hey I'm ${name}, I've ${repoCount} repos`); // New syntax (Preferred)

// Another way to declare a string
const company = new String('NVIDIA') // We use new keyword (objects of JS), inside constructor of String we write the string
console.log(company); // Output:- [String: 'NVIDIA']

// Access key value pair
console.log(company[0]); // Output:- N

// Access prototype
console.log(company.__proto__); // Output:- {}
console.log(company.length); // Output:- 6

// Various types of methods in string
console.log(company.toLocaleLowerCase()); // Output:- nvidia
console.log(company.charAt(3)); // Output:- D
console.log(company.indexOf('D')); // Output:- 3

const shopping = new String('Amazon')
const newString = shopping.substring(0, 4) // Store in a variable, give a starting and ending number. It can't be given negative values.
console.log(newString); // Output:- Amaz

const anotherString = shopping.slice(-5, 4) // Can be given negative values
console.log(anotherString); // Output:- maz

const newString1 = "     Hawk     "
console.log(newString1);
console.log(newString1.trim()); // Removes the leading and trailing whitespaces

const url = "https://xyz.com/xyz%20abc"
console.log(url.replace('%20', '-')); // Output:- https://xyz.com/xyz-abc
console.log(url.includes('abc')); // Output:- true
console.log(url.includes('pqr')); // Output:- false

// Convert String to Array based on any condition
const newString2 = new String('Rat-Cat-Dog')
console.log(newString2.split('-')); // Output:- [ 'Rat', 'Cat', 'Dog' ]

const newString3 = new String('Lenovo Hp Dell')
console.log(newString3.split(' ')); // Output:- [ 'Lenovo', 'Hp', 'Dell' ]

const newString4 = new String('How are you?')
console.log(newString4.blink()); // Output:- <blink>How are you?</blink>
console.log(newString4.bold()); // Output:- <b>How are you?</b>

const str1 = "Good";
const str2 = "Night";
console.log(str1.concat(' ', str2)); // Output:- Good Night

const str3 = "Good night "
console.log(str3.concat("guys, ", "see you tomorrow.")); // Output:- Good night guys, see you tomorrow.

const newString5 = new String('I am pursuing MCA.')
console.log(newString5.endsWith("MCA.")); // Output:- true
console.log(newString5.endsWith("pursuing")); // Output:- false

const newString6 = new String('Night sky')
console.log(newString6.fixed()); // Output:- <tt>Night sky</tt>