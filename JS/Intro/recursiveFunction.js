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
function factorial(n){
    if (n === 0 || n === 1)
    return 1;
return n * factorial(n-1);
};
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(2));
console.log(factorial(1));