/*
Events
- An event is something that happens on the page: a click, a hover, typing, etc.
- We "listen" for these events using addEventListener.
- When the event happens, JavaScript runs a function we give it. This function is called a callback.
- Before you can attach an event to something, you need to first select that element from the DOM.
*/

/*
Steps below:
1. Create a button in your HTML.
2. Attach a click event to it. When clicked, show an alert.
3. Attach a mouseover event to it. When the mouse hovers over it, log the current date to the console.
4. For both events, log the event object itself so you can see what information it holds.
*/

// This function runs when the button is clicked
function clickAlert(e) {
  console.log(e); // e is the event object, it holds details about what happened and where
  alert("Hi button was clicked");
}

// This function runs when the mouse hovers over the button
function mouseOverAlert(e) {
  console.log(e); // same idea, e is the event object for the mouseover
  console.log("Mouse over", new Date());
}

/*
How addEventListener works:
document.querySelector(...) or document.getElementById(...) selects the element first.

addEventListener takes two things:
  1. The event type as a string, e.g. "click", "mouseover"
  2. The callback function to run when that event happens. This function automatically
     receives the event object, usually named "e"
*/

document
  .querySelector("#btn-event-checker")
  .addEventListener("click", clickAlert);

document
  .querySelector("#btn-event-checker")
  .addEventListener("mouseover", mouseOverAlert);

/*
Events aren't just for buttons, you can attach them to the whole window too.
Here we listen for "mousemove" on the window (the whole browser tab),
and update two elements on the page to show the mouse's x and y position.
*/

window.addEventListener("mousemove", (e) => {
  // e.clientX and e.clientY give the mouse's current position on the screen
  document.getElementById("x-b").innerText = e.clientX;
  document.getElementById("y-b").innerText = e.clientY;
});