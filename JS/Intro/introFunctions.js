/*
JAVASCRIPT FUNCTIONS

Functions allow you to write reusable blocks of code.

This follows the DRY principle:
DRY = Don't Repeat Yourself

Function Syntax:

function functionName(parameters) {
    // code block
}

Important Rules:
-> A function executes only when it is called.
-> Calling a function tells JavaScript to execute the code inside the function.
*/

/*
Create a simple function that,
when called, alerts
the current time
using the Kenyan timezone.
*/

function timeAlert() {
    const date = new Date();

    alert(
        `time stamp: ${date.toLocaleString("en-KE", {
            timeZone: "Africa/Nairobi",
        })}`
    );
}

/*
Calling a Function

To call a function,
write the function name
followed by parentheses ().
*/

timeAlert(); // Calling a function

function areaofTriangle(length, height){
console.log(`length is ${length} its type ${typeof length}`);
console.log(`height is ${height} its type ${typeof height}`);
const area = 0.5 * length * height;
console.log(`For triangle with length ${length} and height ${height} area is ${area}`)
}
/*
Scenrio 1
Call the function without any arguments 
*/
areaofTriangle(); //Expected output is undefined  because triangle with length undefined and height undefined, area is NaN

/*
Scanrio 2
Pass only the length 
*/
areaofTriangle(20); //jere. length is 20. height is undefined therefore area will be NaN

/*
Scenario 3
Pass both length and height 
*/
areaofTriangle(20,30); //length is 20 and height is 30, thus the area is 300

/* 
Scenario 4
Create two variables and pass them to the function
*/
const length1 = 50;
const height1 = 60;
areaofTriangle(length1, height1); //length is 50 and height is 60, thus the area is 1500

/* 
Scenario 5;
Create variable with different data types
*/

const length2 = "hello";
const height2 = true;

areaofTriangle(length2, height2); //length is a string and height is a boolean thus the area is NaN


