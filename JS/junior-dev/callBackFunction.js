/*
Callback function is like a Please Call Me
Call Back - It calls the function
A function that takes one or more parameters as function
**One of or more of the parameters are functions
*/

/*
Task:
1. Create a function.
2. The function takes no parameters.
3. Print the current date and time.
4. Test the function by calling it.
*/

//Step 1: Create a function
function showCurrentTime() {
// Step 2: Get the current date and time
    const currentTime = new Date();
// Step 3: Print it to the console
    console.log(currentTime);
}
// Step 4: Call the function
setInterval(showCurrentTime, 5000);

//With the Named function
function showCurrentTime(){
    console.log(new Date());
}
setInterval(showCurrentTime, 3000);

//With Anonymous Function
setInterval(function () {
    console.log(new Date());
}, 3000);

//with Arrow Function
setInterval(() => {
    console.log(new Date());
}, 3000);
