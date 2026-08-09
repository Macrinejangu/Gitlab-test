/*
A recursive function is a function that calls itself
Since this creates an endless loop, you need to find a way to terminate using a return statement or an if condition
*/

function salaryGrossPrompt(message = "Enter your gross salary") {
    let gross = prompt(message);

    if (!isNaN(gross)) {
        console.log(`You entered ${gross}. Exiting.`);
        return;
    }

    salaryGrossPrompt(
        `Really?? Let's try that again, what really is your Gross Salary?🤔`
    );
}

salaryGrossPrompt();

//A factorial is the product of a number and every positive integer below it.

/*function factorial(n){
    if (n === 0 || n === 1)
    return 1;
return n * factorial(n-1);
};
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(2));
console.log(factorial(1));


A callstack is a place where when you call a function, 
it gets added to the top of the stack. 
When the function finishes, it gets removed from the top of the stack. 
This process continues until the stack is empty.
*/


function factorial(n) {

    // Stop when we reach 1 or 0
    if (n === 0 || n === 1) {
        return 1;
    }

    // Make the problem smaller
    let smallerNumber = n - 1;

    // Find the factorial of the smaller number
    let smallerFactorial = factorial(smallerNumber);

    // Multiply the current number by the smaller factorial
    let answer = n * smallerFactorial;

    // Give back the answer
    return answer;
}

console.log(factorial(5)); 