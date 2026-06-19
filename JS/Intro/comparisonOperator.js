/* 
Comparison Operators evaluate to only true or false
1. Equality - ==
2 strict Equality - ===   //Always use this
3. Inequality - !=
4. Strict Inequality - !==   //Always use this
*/

let number1="23"
let number2=24
let strictEqual=number1===number2 //Boolean
console.log(`number1=${number1}===number2=${number2}
    Ans ${strictEqual} its type is ${typeof strictEqual}`)
let nonstrictEqual=number1==number2
console.log(`number1=${number1}===number2=${number2}
    Ans ${nonstrictEqual} its type is ${typeof nonstrictEqual}`)    

let val1=23
let val2="23"
let strictInequality=val1!==val2 //This ought to be true. Different data types should not be equal
console.log(`val1=${val1}===val2=${val2}
    Ans ${strictInequality} its type is ${typeof strictInequality}`)
let Inequality=val1!=val2    
console.log(`val1=${val1}===val2=${val2}
    Ans ${Inequality} its type is ${typeof Inequality}`)    
