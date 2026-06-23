/*
Truthy or falsey
If you know something is falsey then it is truthy
Falsey stuff in javascript

null = the absence of any value.
undefined = the primitive value.
false-Boolean = The keyword false.
NaN-Number = NaN | not a number.
0 = The Number zero, also including 0.0, 0x0, etc.
-0 = The Number negative zero, also including -0.0, -0x0, etc.
0n = The BigInt zero, also including 0x0n, etc. Note that there is no BigInt negative zero — the negation of 0n is 0n.
"" = Empty string value, also including '' and ``.
document.all = The only falsy object in JavaScript is the built-in document.all.
 */

let userName1="Macrine"
let userName2="" //falsy

let activeUserName=userName2 || userName1 
//activeUsername=
console.log(activeUserName)

let bothUserNameOk=userName1&&userName2
console.log(bothUserNameOk) //lets determine of this is truthy of falsy
