// Variables in javascript

const accountId = 913750
let accountEmail = "aot@gmail.com"
var accountPassword = "12345" // prefer not to use var because of issue in block scope and functional scope
accountCity = "Udaipur" // not a good practice
let accountState; // if we only declare a variable & don't assign any value, it will be considered as undefined

//  accountId = 2 // not allowed
 accountEmail= "ds@gmail.com"
 accountPassword = "67890"
 accountCity = "Chennai"

 console.log(accountId);
 console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) // gives output in tabular form