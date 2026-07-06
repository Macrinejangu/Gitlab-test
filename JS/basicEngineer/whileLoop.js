/*
Loops allow you to run a block of code over and over again
You should never loop forever or infinitely
Always have an exit condition
Syntax: 
(while <condition> ){
Block of code}
- This will continue until the condition becomes falsy
If truthy - condition continues
If falsy - Condition exits
*/

let n = 0;
let condition = true;
while (condition){
    console.log("n is ", n);
    n = n+1;

    if (n>100){
        condition = false;
    }
}
