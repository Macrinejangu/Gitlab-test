/*
Truthy or falsey
If you know something is falsey then it is truthy
Falsey stuff in javascript

null = the absence of any value.
undefined = the primitive value.
false-Boolean = The keyword false.
NaN-Number = NaN | not a number.
0 = The Number zero, also including 0.0, 0x0, etc.
-0 = The Number negative zero, also including -0.0, -0x0, etc.
0n = The BigInt zero, also including 0x0n, etc. Note that there is no BigInt negative zero — the negation of 0n is 0n.
"" = Empty string value, also including '' and ``.
document.all = The only falsy object in JavaScript is the built-in document.all.
 */

let userName1="Macrine"
let userName2="" //falsy

let activeUserName=userName2 || userName1 
//activeUsername=
console.log(activeUserName)

let bothUserNameOk=userName1&&userName2
console.log(bothUserNameOk) //lets determine of this is truthy of falsy
 
//when comparing multiple thruthy and falsy values, the first value is what will be returned

/*
Conditions
These enable you to control the flow of the code by making decision

Condition operators->
if
else if
else
    
Syntax: if(){<this is where the condition goes>}
the golden rule of if -> if the condition is truthy then it will execute
it will not execute if the condition is falsy 
*/

/* 
Scenatio 1
declare a variable, asign it a truthy value
Create an if statement and put the variable inside of if statement
console log (scenario 1 it run

Scenario 2
Declare a variablr and assign is a falsy value
create an if statement and put the variable inside the if statement 
Consile log Senario2 it run

Scenario 3
Create an if statement inside the if statement condition part have false
Inside the blocke({}) console log senario 3 it run

Scenrio 4
Declare a variablr and assign is a falsy value
create an if statement and put the variable inside the if statement 
Consile log Senario2 it run

*/


//Scenario 1
//Declare a variable, assign it a truthy value
let myGender="I am a woman"

//Create an if statement and put the variable inside the if statement
if(myGender){
    console.log('Scenario it run')
}

//Scenario 2
//Declare a variable and assign it a falsy value
let myAge= false

//Create an if statement and put the variable inside the if statement
if(myAge){
    console.log(`Scenario 2 it run`)
}

//Scenario 3
if(true){
    console.log(`Scenario 3 it run`)
}
//Scenrio 4
if(false){
    console.log(`scenario 4 it run`)
}

//Scenario 5
if(10>20){
    console.log(`Scenario 5 it run`)
}

//scenario 6
if(20>10){
    console.log(`scenario 6 it run`)
}