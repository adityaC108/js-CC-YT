// foreach loop in javascript

const language = ["C", "C++", "Javascript", "Java", "Python"]
language.forEach( function (item) {
    console.log(item);
    
} )

/*
Output:-
C
C++
Javascript
Java
Python
*/

const webDev = ["HTML", "CSS", "JS", "MySQL"]
webDev.forEach( (item) => {
    console.log(item);
})

/*
Output:- 
HTML
CSS
JS
MySQL
*/

function printMe(item) {
    console.log(item);
}
webDev.forEach(printMe) // function reference

/*
Output:- 
HTML
CSS
JS
MySQL
*/

webDev.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

/*
Output:-
HTML 0 [ 'HTML', 'CSS', 'JS', 'MySQL' ]
CSS 1 [ 'HTML', 'CSS', 'JS', 'MySQL' ]
JS 2 [ 'HTML', 'CSS', 'JS', 'MySQL' ]
MySQL 3 [ 'HTML', 'CSS', 'JS', 'MySQL' ]
*/

const country = [
    {
        stateName: "Maharashtra",
        cityName: "Mumbai"
    },
    {
        stateName: "Rajasthan",
        cityName: "Jaipur"
    },
    {
        stateName: "Kerala",
        cityName: "Thiruvananthapuram"
    }
]

country.forEach( (item) => {
    console.log(item.stateName); 
})

/*
Output:- 
Maharashtra 
Rajasthan 
Kerala
*/