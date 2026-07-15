/*
Expressions are pieces of codes that produces a value
Examples
X>5 =>True of false 
10+11->21(Value)
CircleAre(5)=>Expression function call reference value->n1
*/

function sayMyName(){
    console.log("Sam Mwangi")
}

let n1 = 23;
console.log(n1); //Here you get 23
console.log(10+12); //Here you get 22
console.log(n1>10); //n1>10 or true or false
console.log(sayMyName()); //The output of this will be undefined

let n2 = 34; //This is a statement that produces an action. You basically use it to store 
let result = console.log("hello");
console.log(result);