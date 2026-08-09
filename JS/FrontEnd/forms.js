/*
how to work with forms
onsubmit - This is the default, so if you're using it, you have to prevent default behaviour
onclick
attach these two to a from
*/

document.getElementById("form1").addEventListener("submit", submitForm);

document.getElementById("form1input1").addEventListener("input", (e) => {
    // Handle input event
    console.log("Input event:", e.target.value);
});

function submitForm(e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const inputList = document.querySelectorAll("form1input1").querySelectorAll("input");
    
    const input1 = inputList[0];
    const input2 = inputList[1];
    
    console.log("Form submitted");
    console.log("Input 1 value:", input1.value);
    console.log("Input 2 value:", input2.value);
    console.log("f1 input1", document.getElementById("form1input1").value);
    console.log("f1 input2", document.getElementById("form1input2").value);
    input1.value = "cats and dogs";

}