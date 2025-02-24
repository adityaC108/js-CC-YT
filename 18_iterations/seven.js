// map and chaining in javascript

// map takes callback function inside map() and it automatically returns the value
const myNumbers = [60, 70, 80, 90, 100]
const newNumbers = myNumbers.map( (num) => num + 5)
console.log(newNumbers); // Output:- [ 65, 75, 85, 95, 105 ]

const myNumber = [10, 20, 30, 40, 50]
const newNumber = []
myNumber.forEach( (num) => {
    if(num <= 50) {
        newNumber.push(num + 5)
    }
})
console.log(newNumber); // Output:- [ 15, 25, 35, 45, 55 ]

// chaining
const myNo = [86, 87, 88, 89, 90, 91, 92, 93, 94, 95]
const newNo = myNo.map( (num) => num * 10 ).map( (num) => num + 1)
console.log(newNo);

// In case of chaining the result of first chain(first map(), 860) is passed to the second chain(second map(), 860 + 1 = 861)
/*
Output:-
[
  861, 871, 881, 891,
  901, 911, 921, 931,
  941, 951
]
*/

const myNum = [86, 87, 88, 89, 90, 91, 92, 93, 94, 95]
const newNum = myNum.map( (num) => num * 10 ).map( (num) => num + 1).filter( (num) => num <= 900 )
console.log(newNum); // Output:- [ 861, 871, 881, 891 ]