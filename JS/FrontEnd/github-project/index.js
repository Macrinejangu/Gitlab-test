/*

*/


const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://api.github.com/users", requestOptions)
  .then((response) => response.json())
  .then((result) => {
  console.log("type of result", typeof result);
  console.log(result);
  })

  .catch((error) => console.error(error));

  /*
  Write code without Promises
  1. Creaye a variable and give it any key
  2. Console.log tha value of the variable
  3. create and call a function that modifies this variable
  4. consol.log the value of the variable
   */

  let rest = "Rest Day";
  console.log("29", rest);
  let result = fetch("https://api.github.com/users", requestOptions)
  .then((response) => response.json())
  .then((result) => {
  function testfunc(){
    rest = "updated rest date";
  }
  testfunc();
  console.log("37", rest);
})