/* 
Comparison Operators
Compariso operatis only evaluate true or false.

And Operators
And => &&
For this, we need a truth table
The idea is that it looks at all possible combinations
Eg. Val1 and Val2, so for this, all the combinations are:
Val1 && Val2 and then Val2 && Val1

&&(and) and ||(or) work with truthy and falsy
*/
 
let val1=true
let val2=true

console.log(`val1=${val1} val2=${val2} va1&&val2=${val1&&val2}`)

let mercyAge=20
let mercyBalance=50000

//if mercy's age is greater than 18 and has more than 20k in her bank account
let isGreaterThan18=mercyAge=18 //true or false?
console.log(`Is Mercys Age greater than 18 ${isGreaterThan18}`)

let hasMoreThan20k=mercyBalance>20000
console.log(`Mercy has more than 20k ${hasMoreThan20k}`)
console.log(`Mercys age is greater than 18 and has more than 20k in her account ${isGreaterThan18&&hasMoreThan20k}`)

//MercyAge>18&&MercyBalance>20000
let simplified=mercyAge>18&&mercyBalance>20000
console.log(`simplified ${simplified}`)
console.log(`further simplification is ${mercyAge>18&&mercyBalance>20000}`)

/*
Or Operator
In this, atleast one statement needs to ne true for the whole statement to be true 
*/

console.log (`mercys age is greater than 18 or she had more than 20k in her ccount ${isGreaterThan18 ||hasMoreThan20k}`)
console.log(`This is not true = ${!true}`)
console.log(`This is not false = ${false}`)
