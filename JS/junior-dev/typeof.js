const bonus = "50000" //Error
const salaryGross = 800000
console.log("Gross Salary is", salaryGross) 

const totalSalary = salaryGross + bonus
console.log("Total Salary is", totalSalary) //Error, because bonus is a string and salaryGross is a number. You can't add a string and a number together. You need to convert the string to a number first.


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

