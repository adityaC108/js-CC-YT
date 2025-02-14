// switch in javascript

// Syntax
switch (key) {
    case value:
        
        break;

    default:
        break;
}

const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March"); // Output:- March
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;

    default:
        console.log("List of 6 months");
        break;
}

// If any case is matched after that all the code is executed except default.

const months = "September"
switch (months) {
    case "July":
        console.log("7th month");
        break;
    case "August":
        console.log("8th month");
        break;
    case "September":
        console.log("9th month"); // Output:- 9th month
        break;
    case "October":
        console.log("10th month");
        break;
    case "November":
        console.log("11th month");
        break;
    case "December":
        console.log("12th month");
        break;

    default:
        console.log("List of 6 months");
        break;
}