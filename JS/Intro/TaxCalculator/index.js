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
if (monthlyGrossSalary <= 24000) {
    tax = monthlyGrossSalary * 0.10
    tier = "0-24000 Ksh"
} 
// Tier 2
else if (monthlyGrossSalary <= 24000 + 8333) {
    paye = (24000 * 0.10) + ((salary - 24000) * 0.25)
    tier = "24001-32333 Ksh"
} 
//Tier 3
else if (monthlyGrossSalary <= 24000 + 8333 + 467667) {
    paye = (24000 * 0.10) + (8333 * 0.25) + ((monthlyGrossSalary - 24000 - 8333) * 0.30)
    tier = "32333-500000 Ksh"
} 
// Tier 4
else if (monthlyGrossSalary <= 24000 + 8333 + 467667 + 300000) {
    paye = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + ((salary - 24000 - 8333 - 467667) * 0.325)
     tier = "500000-Infinity Ksh"
} 
// Tier 5
else {
    paye = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + (300000 * 0.325) + ((salary - 24000 - 8333 - 467667 - 300000) * 0.35)
    tier = "800000-800000 Ksh"
}

alert(`PAYE is ${paye} and your in tier ${tier}`)

//NSSF
let nssf=0
if (monthlyGrossSalary<=9000){
    nssf=monthlyGrossSalary * 0.06;
}
else if(monthlyGrossSalary<=108000){
    nssf = (9000*0.06) + ((monthlyGrossSalary - 9000) *0.06);
}
else{
    nssf = 6840
}

let employerNssf = nssf;
let totalNssf = nssf + employerNssf

alert(`employer NSSF is ${nssf}, Employer NSSF is ${employerNssf}, Total NSSF is ${totalNssf}`)

//Personal Relief
let personalRelief = 2400 //This is a fixed monthly deducted amount.
let netPaye = paye - personalRelief;
if (netPaye<0){
    netPaye=0;
}

alert(`Your Gross PAYE before personal relief = ${paye}
Personal relief = ${personalRelief} 
Net PAYE payable = ${netPaye}`)

//SHIF
let shif = monthlyGrossSalary * 0.0275
if (shif<300){
    shif=300;
}

alert(`SHIF = ${shif}`)

//Affordable Housing
let housingLevy = monthlyGrossSalary * 0.015;

alert(`Housing Levy = ${housingLevy}`)

//NET PAY/ Taxable Income

let netPay = monthlyGrossSalary - netPaye - nssf - shif - housingLevy

alert(`Gross Salary = ${monthlyGrossSalary}
    NSSF = ${nssf}
    SHIF = ${shif}
    Housing Levy = ${housingLevy}
    Personal Relief = ${personalRelief}
    Net Paye = ${netPaye}
    Net Paye = ${netPay}`)