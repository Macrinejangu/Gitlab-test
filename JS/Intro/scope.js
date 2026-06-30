/**
 * SCOPES
 *
 * Scope determines WHERE a variable can be accessed in your code.
 * Think of it like rooms in a house — a variable is like an object
 * in a room. You can only use it if you're in the right room.
 *
 * There are four types of scope in JavaScript:
 *   1. Global Scope
 *   2. Function Scope
 *   3. Block Scope
 *   4. Lexical Scope (scope inheritance)
 */

// 1. GLOBAL SCOPE
/**
 * A variable declared OUTSIDE any function or block lives in global scope.
 * Every part of your code can read and change it.
 */

// Example 1 — a username accessible everywhere
const username = "Macrine";

function greet() {
  console.log(username); // can access the global variable from inside a function
}

greet();              // "Macrine"
console.log(username); // "Macrine"


// Example 2 — Pi as a global constant
const PI = 3.14159;

function circleArea(radius) {
  return PI * radius * radius; // uses the global PI
}

function circumference(radius) {
  return 2 * PI * radius; // uses the same global PI
}

console.log(circleArea(5));      // 78.53975
console.log(circumference(5));   // 31.4159


// Example 3 — the danger of global variables
/**
 * Any function anywhere in your code can accidentally overwrite a global.
 * This is why globals should be used sparingly.
 */

let score = 100;

function resetGame() {
  score = 0; // silently modifies the global — easy to miss
}

resetGame();
console.log(score); // 0  ← was 100, now gone

// 2. FUNCTION SCOPE


/**
 * A variable declared INSIDE a function only exists inside that function.
 * Once the function finishes, the variable is gone.
 * Each function call gets its own fresh copy of its variables.
 */

// Example 1 — variable locked inside a function
function makeGreeting() {
  const message = "Hello!"; // function-scoped
  console.log(message);     // "Hello!"
}

makeGreeting();
// console.log(message); // ReferenceError: message is not defined


// Example 2 — each call starts fresh
function counter() {
  let count = 0;
  count++;
  console.log(count);
}

counter(); // 1
counter(); // 1  (starts fresh — does not remember the last call)
counter(); // 1


// 3. BLOCK SCOPE

/**
 * A block is any code wrapped in { } — an if statement, a for loop, etc.
 * Variables declared with `let` or `const` inside a block are ONLY
 * accessible inside that block.
 *
 * Note: `var` does NOT respect block scope — avoid it and use let/const instead.
 */

// Example 1 — if block
if (true) {
  let animal = "cat";
  const color = "orange";
  console.log(animal); // "cat"
  console.log(color);  // "orange"
}

// console.log(animal); // ReferenceError: animal is not defined
// console.log(color);  // ReferenceError: color is not defined


// Example 2 — for loop with let (each iteration gets its own variable)
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}

// console.log(i); // ReferenceError: i is not defined


// 4. LEXICAL SCOPE (SCOPE INHERITANCE)

/**
 * Inner functions can access variables from their outer (parent) scope.
 * JS determines scope at the time you WRITE the code, not when you run it.
 * This is called "lexical" (meaning "based on where it is in the source").
 *
 * The rule: inner can see outer, but outer CANNOT see inner.
 */

// Example 1 — inner function reads from outer and global scope
const name = "Macrine";

function outer() {
  const greeting = "Hello";

  function inner() {
    // inner sees `greeting` from outer() and `name` from global scope
    console.log(`${greeting}, ${name}!`);
  }

  inner();
}

outer(); // "Hello, Macrine!"


// Example 2 — outer cannot see into inner
function parent() {
  function child() {
    const secret = "hidden";
  }

  // console.log(secret); // ReferenceError: secret is not defined
}

/**
 * SCOPE PRACTICE EXERCISE
 *
 * Goal: Learn how JavaScript searches for variables in different scopes.
 *
 * There are 7 steps. Each one builds on the last.
 * Write your code where indicated, then answer the questions in the comments.
 */


// ─────────────────────────────────────────────
// STEP 1
// Create a global variable called `name`
// and assign it the value "Samson".
// ─────────────────────────────────────────────


// ─────────────────────────────────────────────
// STEP 2
// Create a function called sayMyName().
// Inside it, print the value of `name` and the line number.
//
// Example:
//   console.log(`name: ${name} line: 20`);
//
// Then call the function.
// ─────────────────────────────────────────────
// ─────────────────────────────────────────────
// STEP 3
// Inside sayMyName(), at the very beginning of the function,
// declare another variable called `name` and assign it "Maggy".
// Print the new value and its line number.
//
// Question: Which value is printed — "Samson" or "Maggy"? Why?
// YOUR ANSWER:
// ─────────────────────────────────────────────
// ─────────────────────────────────────────────
// STEP 4
// Still inside sayMyName(), create an if statement with a truthy condition.
//
// Example:
//   if (true) {
//     // your code
//   }
//
// Inside the if block, print `name` and its line number.
//
// Question: Which name is printed? Why?
// ─────────────────────────────────────────────
// ─────────────────────────────────────────────
// STEP 5
// Inside the if block, at the very top, declare another variable called `name`
// and assign it "Delilah".
// Print the value and its line number.
//
// Question: Which name is printed now? Why?
// YOUR ANSWER:
// ─────────────────────────────────────────────
// ─────────────────────────────────────────────
// STEP 6
// After the if block (but still inside sayMyName()),
// print `name` and its line number again.
//
// Question: Which value is printed? Why isn't "Delilah" available here?
// YOUR ANSWER:
// ─────────────────────────────────────────────
// ─────────────────────────────────────────────
// STEP 7
// Try declaring the same variable twice in the same scope.
//
// Example:
//   let name = "John";
//   let name = "Peter";
//
// Run the program.
//
// Question: What error does JavaScript give? Why does it happen?
// YOUR ANSWER:
// ─────────────────────────────────────────────




