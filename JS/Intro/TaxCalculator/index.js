/*
The different ways to declare/confirm numbers
- !isNan
+<>
Number
 */

// Step 1: defining the salary input and ensuring it's a number | Here, we'll also create a loop and break it once the goal is met

let monthlyGrossSalary = null;
while(true){
    let gross = prompt("Enter Your Monthly Salary")
if (!isNaN(gross)){
    gross=Number(gross);
    if(gross>0){
        monthlyGrossSalary=gross;
        break;
    }
}
alert(`No way You didnt put your actual Salary.
Let's try this again!`);     
}
console.log(`Your Gross Salary is ${monthlyGrossSalary} is type of ${typeof monthlyGrossSalary}`)

//The next step is to calculate the PAYE | Tip: Use if Statements

let paye=null;
let tier=null;
//Tier 1
if (grossMonthlySalary >= 0 && grossMonthlySalary <= 24000) {
    paye = grossMonthlySalary * 0.10
    tier = "0-24,000 Ksh"
}
//Tier 2
else if (grossMonthlySalary <= 32333) {
    paye = grossMonthlySalary * 0.25
     tier ="24,000-32,333 Ksh"
} 

//Tier 3
else if (grossMonthlySalary <= 500000) {
    paye = grossMonthlySalary * 0.30
     tier="32,333-500,000 Ksh"
} 

//Tier 4
else if (grossMonthlySalary <= 800000) {
    paye = grossMonthlySalary * 0.325
     tier="500,000-800,000 Ksh"
} 

// Tier 5
else {
    paye = grossMonthlySalary * 0.35
     tier="800,000-Infinity Ksh"
}

console.log(`PAYE is ${paye}`)