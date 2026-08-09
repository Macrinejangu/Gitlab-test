/*For loop is meant for numbers
It's a combination of using while for numbers

A while loop asks, “Should I keep going?”
A for loop says, “I’m going to count from here to there.”

*/

let k = 35
while (k<20){
    console.log(`k, ${k}`);
    k = k-1;
}

//for loop
for(let k=35; k<20; k-1){
    console.log(`k, ${k}`)
}

/*Any for loop can be written as a while loop whereas;
Not all while loops can be written as for loops
*/

function inputNumbers() {
    let number1 = Number(prompt("Hey you, pick a number!"));

    while (isNaN(number1) || number1 <= 1) {
        number1 = Number(prompt("Nice try! Enter a number greater than 1."));
    }

    let number2 = Number(prompt("Hey you, pick another number!"));

    while (isNaN(number2) || number2 <= 1) {
        number2 = Number(prompt("Not again! Enter a number greater than 1."));
    }

    showTable(number1, number2);
}

function showTable(number1, number2) {
    for (let firstNum = number1; firstNum >= 1; firstNum--) {
        for (let secondNum = number2; secondNum >= 1; secondNum--) {
            console.log(
                firstNum + " * " + secondNum + " = " + (firstNum * secondNum)
            );
        }
    }
}

inputNumbers();
