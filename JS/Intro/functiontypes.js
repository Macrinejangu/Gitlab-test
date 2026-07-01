/*
1. Named fucntion;
2. Anonymous functuon;{without a name)
- a function can be assigned to variable.
- a variable can reference a function
*/

function areaCircle(r){
    return 3.142 * r * r; // Area of a function, this is a named function
}
 let age =23;
 let SamAge = age; //This will be 23

 let ac = areaCircle;
  //This means don't execute the function, store the function itself | Both variablrs point t the same function
  console.log(ac)
 console.log(typeof ac);
  //Output will be (function)

  // Create a named function
  function rectangleArea(length, width){
    return length * width;
  }
  // Asign the function a vsriable and test it.
  let area = rectangleArea;
  console.log(typeof area)
  //Directly assign the variable to the function definition

let area2 = function rectangleArea2(length, width){
    return length * width;
} //The function is now inside the varibale assignment. The variable now owns the functionreference immediately

console.log(area2(5,4));
console.log(rectangleArea2(5,4)); //output is referencearror:rectabglearea2 not defined

let area3 = function(length1, width1){
    return length1 *width1
};
console.log(area3(5,6));
