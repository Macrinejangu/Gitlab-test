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

    if (n>=5){ // Another way I can write this is. if(n === 100)
        condition = false;
    }
}

/*
Create a function (any name)
The funtion ahould take a parameter and the parameter should be greater than 0
Have a loop inside that counts down from this number
Use while llo. It should print n
*/

function countDown (n){  //Create a function called countDown.
    while (n>0){ //Is n greater than 0?
        console.log(n); 
        n = n - 1; //then n reduces by 1 
    }
}
countDown(5) //Run the function and start with 25

/* 
- 1 You can out the condition inside the loop
- 
- 
*/

/*Kindergarten tracher wants to generate a maths table for students. 
The table is dynamic

Create a function @function1(give it any name)
it does not take any parameters
this function:
prompts a user for the first  number
Check if the number is a valid number greater than 1
prompts a user for the second  number
Check if the number is a valid number greater than 1
Use recurssion or a while loop to ensure the user enters a number
After the number is entered, call function2<> which takes a number as a parameter
eg function2(number1, number 2)

Create a function2(give it any name)
this function takes the following parameters;
param1 number greater than 1
param2 number greater than 1
Check if param 1 is a number greater than 1
Check if param 1 is a number greater than 1

ie: 
3*5
3*4 etc
--------------------
2*5
2*4 etc
--------------
And so on and so forth.
Hint: Use Nested Values
*/

/*
Function 1
Gets two valid numbers from the user.
*/
 function inputNumbers(){
    let number1 = Number(prompt(`Hey you, pick a Number!`));
    while(isNaN(number1) || number1<=1){
        number1 = Number(prompt(`Nice Try! Let's try again, what is any number greater than 1?`));
    }
   
    let number2 = Number(prompt(`Hey you, pick another Number!`));
    while(isNaN(number2) || number2<=1){
        number2 = Number(prompt(`Not Again! Let's try this one more time, what is any number greater than 1?`));
    }
showTable(number1, number2);
 }

/*
Function 2
Prints a multiplication table using nested while loops.
*/
function showTable(number1, number2){
    if (isNaN(number1) || number1<=1){
        return;
    }
    if(isNaN(number2) || number2<=1){
        return;
    }
let firstNum = number1;
while(firstNum >= 1){
   let secondNumb = number2;
   while(secondNumb >= 1){
   console.log(firstNum + " * " + secondNumb + " = " + (firstNum * y));
   secondNumb = secondNumb-1;
   }
   firstNum = firstNum-1;
}
}
inputNumbers();