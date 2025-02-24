// foreach loop and filter in javascript

// Foreach doesn't return any value
const phone = ["iPhone", "Google Pixel", "Samsung", "Motorola", "OnePlus"]
const values = phone.forEach( (item) => {
    console.log(item); // Output:- iPhone Google Pixel Samsung Motorola OnePlus
    return item
})
console.log(values); // Output:- undefined

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNumbers = myNumbers.filter( (num) => num > 5) // filter takes callback function inside filter()
console.log(newNumbers); // Output:- [ 6, 7, 8, 9, 10 ]

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum = myNum.filter( (num) => {
    return num > 5
})
console.log(newNum); // Output:- [ 6, 7, 8, 9, 10 ]

const myNo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNo = []
myNo.forEach( (num) => {
    if (num > 5) {
        newNo.push(num) // push() adds the specified elements to the end of an array and returns the new length of the array
    }
})
console.log(newNo); // Output:- [ 6, 7, 8, 9, 10 ]

const books = [
    {title: 'To Kill a Mockingbird', author: 'Harper Lee', publish: 1960, genre: 'Thriller'},
    {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publish: 1925, genre: 'Fiction'},
    {title: 'Pride and Prejudice', author: 'Jane Austen', publish: 1813, genre: 'Romance'},
    {title: 'The Catcher in the Rye', author: 'J.D. Salinger', publish: 1951, genre: 'Fiction'},
    {title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', publish: 1954, genre: 'Fantasy'}
]
const userBooks = books.filter( (bk) => bk.genre === 'Fiction')
const userBook = books.filter( (bk) => {
    return bk.publish >= 1950
})
const usersBook = books.filter( (bk) => {
    return bk.publish >= 1950 && bk.genre === 'Fiction'
})
console.log(userBooks);
console.log(userBook);
console.log(usersBook);

/*
Output:-
[
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publish: 1925,
    genre: 'Fiction'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    publish: 1951,
    genre: 'Fiction'
  }
]
[
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publish: 1960,
    genre: 'Thriller'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    publish: 1951,
    genre: 'Fiction'
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    publish: 1954,
    genre: 'Fantasy'
  }
]
[
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    publish: 1951,
    genre: 'Fiction'
  }
]
*/