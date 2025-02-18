// for loop in javascript

// Syntax
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

for (let i = 0; i <= 10; i++) {
    const element = i;
     console.log(element); // Output:- 0 1 2 3 4 5 6 7 8 9 10 (Output will be displayed vertically)
}

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is displayed");
        
    }
     console.log(element); // Output:- 0 1 2 3 4 5 is displayed 5 6 7 8 9 10 (Output will be displayed vertically)
}

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop values: ${i}`);
    for (let j = 0; j <= 10; j++) {
    console.log(`Inner loop values ${j} and inner loop ${i}`);  
    }
}

/*
Output:-
Outer loop values: 0
Inner loop values 0 and inner loop 0
Inner loop values 1 and inner loop 0
Inner loop values 2 and inner loop 0
Inner loop values 3 and inner loop 0
Inner loop values 4 and inner loop 0
Inner loop values 5 and inner loop 0
Inner loop values 6 and inner loop 0
Inner loop values 7 and inner loop 0
Inner loop values 8 and inner loop 0
Inner loop values 9 and inner loop 0
Inner loop values 10 and inner loop 0
Outer loop values: 1
Inner loop values 0 and inner loop 1
Inner loop values 1 and inner loop 1
Inner loop values 2 and inner loop 1
Inner loop values 3 and inner loop 1
Inner loop values 4 and inner loop 1
Inner loop values 5 and inner loop 1
Inner loop values 6 and inner loop 1
Inner loop values 7 and inner loop 1
Inner loop values 8 and inner loop 1
Inner loop values 9 and inner loop 1
Inner loop values 10 and inner loop 1
.....
*/

for (let i = 1; i <= 10; i++) {
    console.log(`Table of ${i}`);
    for (let j = 1; j <= 10; j++) {
    console.log(i + ' * ' + j + ' = ' + i * j);  
    }
}

/*
Output:- 
Table of 1
1 * 1 = 1
1 * 2 = 2
1 * 3 = 3
1 * 4 = 4
1 * 5 = 5
1 * 6 = 6
1 * 7 = 7
1 * 8 = 8
1 * 9 = 9
1 * 10 = 10
Table of 2
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8
2 * 5 = 10
2 * 6 = 12
2 * 7 = 14
2 * 8 = 16
2 * 9 = 18
2 * 10 = 20
..... (It will print tables till 10)
*/

let myArray = ["Google", "Microsoft", "Apple"]
console.log(`Length of array is ${myArray.length}`); // Output:- Length of array is 3

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element); // Output:- Google Microsoft Apple
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 7) {
        console.log("Detected 7");
        break
    }
    console.log(`Value of i is ${index}`);
}

/*
Output:- 
Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
Value of i is 5
Value of i is 6
Detected 7
*/

for (let index = 1; index <= 20; index++) {
    if (index == 7) {
        console.log("Detected 7");
        continue
    }
    console.log(`Value of i is ${index}`);
}

/*
Output:- 
Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
Value of i is 5
Value of i is 6
Detected 7
Value of i is 8
Value of i is 9
Value of i is 10
..... (It will print the value till 20)
*/
