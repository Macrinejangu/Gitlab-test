/*
Numbers are the most basic data types in JavaScript. They represent numeric values and can be used for mathematical operations. JavaScript has two types of numbers: integers and floating-point numbers.
-floating numbers are numbers that have a decimal point. They can represent a wider range of values than integers, but they are less precise. For example, the number 0.1 cannot be represented exactly in binary, so it is stored as an approximation.
- real numbers are numbers that can be represented as a fraction of two integers. They can be positive, negative, or zero. Real numbers can also be represented in scientific notation, which is a way of expressing very large or very small numbers using powers of 10.
- positive numbers are numbers that are greater than zero. They can be represented with a plus sign (+) or without any sign at all. For example, +5 and 5 are both positive numbers.
- negative numbers are numbers that are less than zero. They are represented with a minus sign (-). For example, -5 is a negative number.
- infinity is a special value that represents a number that is larger than any other number. It can be positive or negative. Positive infinity is represented as Infinity, while negative infinity is represented as -Infinity.
*/

let number1 = 43 //real number, positive integer
console.log(number1) 
let number2 = 3.14 //floating-point number
console.log(number2) 
let number3 = -5 //real number, negative integer
console.log(number3) 
let number4 = Infinity //positive infinity
console.log(number4) 
let number5 = -Infinity //negative infinity

/* String - Used to store a sequence of characters.
A string can be created using single quotes (' '), double quotes (" "), or backticks (` `).
Strings can contain letters, numbers, symbols, and whitespace characters. They are immutable, meaning that once a string is created, it cannot be changed. However, you can create a new string by concatenating or manipulating existing strings.
*/

let string1 = 'Hello, World!' //using single quotes
console.log(string1) 
let string2 = "JavaScript is fun!" //using double quotes
console.log(string2) 
let string3 = `The result of 2 + 2 is ${2 + 2}` //using backticks with template literals
console.log(string3)
let string4 = "23" //This is a string and not a number
console.log(string4)

let string5 = 'Daniel said "Javascript is fun"'
console.log(string5)
/*
Special characters in strings can be represented using escape sequences. 
An escape sequence is a combination of a backslash (\) followed by a character that has a special meaning. For example, to include a double quote inside a string that is enclosed in double quotes, you can use the escape sequence \".
\t represents a tab character, 
\n represents a newline character, and 
\\ represents a literal backslash. 
*/

let string6 = `This is line one
This is line 2
And finally line 3`
//Backticks allow for multi-line strings.
//You can also include variables and expressions using ${}.

console.log(string6)

/* Boolean - Represents a logical value that can be either true or false.
Booleans are often used in conditional statements and loops to control the flow of a program. They can also be used to represent the state of an object or a condition that needs to be checked.
*/

let boolean1 = true
console.log(boolean1) 
let boolean2 = false
console.log(boolean2)

/*null - Represents the intentional absence of any object value. It is often used to indicate that a variable has no value or that a function does not return a value. In JavaScript, null is a primitive value that can be assigned to a variable or returned from a function.
*/

let nullValue = null
console.log(nullValue)
 
/* undefined - Represents a variable that has been declared but has not been assigned a value. 
It is also the default value of function parameters that have not been provided with an argument. 
In JavaScript, undefined is a primitive value that can be assigned to a variable or returned from a function.
*/

let undefinedValue = undefined //don't do this, it's better to just declare the variable without assigning a value to it, which will automatically make it undefined.
console.log(undefinedValue)
let anotherUndefinedValue; //js engine will automatically assign undefined to this variable
console.log(anotherUndefinedValue)
