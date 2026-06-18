/*
Template or string interpolations is a way to combine data and string for output
*/

//normal String Concatination
let firstName = "Macrine"
let secondName = "Jangu"
let age = 20
let address = "Gitaru State"

let userDetails=firstName + " " + secondName + " is " + age + " years old," + "she stays at " + address
console.log(userDetails)
console.log("User Details is", typeof userDetails)

/*
The best way to create a template string using backticks
*/
 let userDetails2 = `${firstName} ${secondName} is ${age} years old and she stays at ${address}`
 //You can console log two ways; either through the value in the data type
console.log(userDetails2)
//or by console.logging the individual values for each datatype
console.log (`${firstName} ${secondName} is ${age} years old and she lives in ${address}`)

/*
Assignment
Addition - We use this to add two or more numbers
*/
let number1=23; //This is declaring and assigning a variable
console.log (`number1 is ${number1} its type is ${typeof number1}`)
number1=40;
console.log(`number1 is ${number1} its type is ${typeof number1}`)
let number2=60
console.log (`number2 is ${number2} its type is ${typeof number2}`)
//Addition
let number3 = number1+number2+10 //This should be 40+60+10
console.log(`number3 is ${number3} its type is ${typeof number3}`)
//Multiplication
let number4 = number1*number2
console.log(`number4 is ${number4} its type is ${typeof number4}`)
//Raising to power 'n'
let number5=number1**2 // this is 23 raised to power 2
console/log(`number5 is ${number5} its type is ${typeof number5}`)
let number6=Math.pow(10,3)//10^3
console.log(`number6 is ${number6} its type is ${typeof number6}`)

// cos - finds the cosine of an angle (angle must be in radians, not degrees)
// tan - finds the tangent of an angle (also needs radians)
// log - finds the natural logarithm of a number (log base e, not base 10)
// pow - raises a number to a power, like base^exponent (e.g. Math.pow(2,3) = 8)
