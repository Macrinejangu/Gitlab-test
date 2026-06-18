/*
console.log() - This is priniting out the value of the variables/Information in the screen
Ensure to write your consoles in such a way that helps you understand the issue/what you're coding
Exercise: Calculate net salart from gross salary
*/

const salaryGross = 800000 //Instruction
console.log("Gross Salary is", salaryGross)
const paye = salaryGross * 0.16
console.log("PAYE is", paye)
const sha = 2500
console.log("SHa is", sha)
const nssf = 2000
console.log("NSSF is", nssf)
const totalDeductions = paye + sha + nssf
console.log( "Totl Deductions ia", totalDeductions)
const salaryNet = salaryGross - totalDeductions
console.log("Net Salary is", salaryNet)

/* the typeof is used to check the variable type for a value
-> number
-> string
-> boolean
-> null
-> undefined
*/

let number1 = 25
console.log ("number1", number1, "It's Type is", typeof number1)
let string1 = "854"
console.log ("string1", string1, "It's Type is", typeof string1)
let myName = "Macrine"
console.log ("myName", myName, "It's Type is", typeof myName)
let isMarried = false
console.log ("isMarried", isMarried, "It's Type is", typeof isMarried)
let nullValue = null
console.log ("nullValue", nullValue, "It's Type is", typeof nullValue)
let unValue;
console.log ("unValue", unValue, "It's Type is", typeof unValue)

