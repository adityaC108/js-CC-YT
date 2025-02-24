// reduce in javascript

const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log(sumWithInitial); // Output:- 10
/*
Explanation:-
only for the first time the initialValue goes in the accumulator

accumulator  + currentValue = sumWithInitial
0             1               1
1             2               3
3             3               6
6             4               10
*/

const myNum = [10, 20, 30]
const myTotal = myNum.reduce(function (acc, currval) {
    console.log(`Accumulator ${acc} and Current value: ${currval}`);
    return acc + currval
}, 0)
console.log(myTotal);

/*
Output:- 
Accumulator 0 and Current value: 10
Accumulator 10 and Current value: 20
Accumulator 30 and Current value: 30
60
*/

const myNums = [70, 80, 90, 100]
const total = myNums.reduce( (acc, currval) => (acc + currval), 0)
console.log(total); // Output:- 340

const shoppingCart = [
    {
        itemName: "Veg Burger",
        price: 125
    },
    {
        itemName: "Mirinda",
        price: 30
    },
    {
        itemName: "French Fries",
        price: 70
    },
    {
        itemName: "Tandoori Paneer Pizza",
        price: 350
    }
]
const payment = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(payment); // Output:- 575