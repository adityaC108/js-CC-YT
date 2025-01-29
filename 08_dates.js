// Date and time in javascript

// Dates are calculated in milliseconds
let myDate = new Date()
console.log(typeof myDate); // Output:- object
console.log(myDate); // Output:- 2025-01-29T01:30:05.342Z
console.log(myDate.toString()); // Output:- Wed Jan 29 2025 07:01:05 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Output:- Wed Jan 29 2025
console.log(myDate.toISOString()); // Output:- 2025-01-29T01:33:59.945Z
console.log(myDate.toJSON()); // Output:- 2025-01-29T01:33:59.945Z
console.log(myDate.toLocaleDateString()); // Output:- 29/1/2025
console.log(myDate.toLocaleString()); // Output:- 29/1/2025, 7:03:59 am

let myCreatedDate = new Date(2025, 0 , 25)
console.log(myCreatedDate.toDateString()); // Output:- Sat Jan 25 2025 (Months begin with 0 in JS)

let myCreatedDates = new Date(2025, 0 , 25, 5, 3)
console.log(myCreatedDates.toLocaleString()); // Output:- 25/1/2025, 5:03:00 am

let anotherDate = new Date("2025-01-15") // (YYYY-MM-DD)
console.log(anotherDate.toLocaleString()); // Output:- 15/1/2025, 5:30:00 am 

let anotherDates = new Date("03-20-2025") // (DD-MM-YYYY)
console.log(anotherDates.toLocaleString()); // Output:- 20/3/2025, 12:00:00 am


// Always compare time in milliseconds
let myTimeStamp = Date.now()
console.log(myTimeStamp); // Output:- 1738115658284 (the value is given in milliseconds. From beginning of January 1, 1970, UTC till today)
console.log(anotherDates.getTime()); // Output:- 1742409000000 ((beginning of January 1, 1970, UTC till 03-20-2025)

// Convert from milliseconds to seconds (**Interview question**)
console.log(Date.now()/1000); // Output:- 1738116494.646
console.log(Math.floor(Date.now()/1000)); // Output:- 1738116531 (to avoid getting decimal values we use Math.floor())

let newDate = new Date()
console.log(newDate.getMonth()); // Output:- 0
console.log(newDate.getMonth() + 1); // Output:- 1 (for users understanding)
console.log(newDate.getDate()); // Output:- 29
console.log(newDate.getFullYear()); // Output:- 2025
console.log(newDate.getHours()); // Output:- 7

// Mostly used and can be customized
newDate.toLocaleString('default', {
    weekday: "long"
})