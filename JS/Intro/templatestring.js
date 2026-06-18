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
console.log(userDetails2)
console.log (`${firstName} ${secondName} is ${age} years old and she lives in ${address}`)

