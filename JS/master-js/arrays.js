/*
Arrays are objects
They are basically specalised objects that were created
Objects come in a key- String, null, undefined, boolean
Array values can be any data type
The difference between an array and a normal object is that the keys are sequesntial
When accessing array elements, use bracket notations
The keys are numbers

You use <[value 1, value 2, value 3]>
Since the numbers are numbers and sequenstial, you are mot required to provide them 
<they are not provided>
*/
 //Example

 let array1 = [
    'Mazda2', 
    'AWD-2018', 
    '180 km/h', 
    'Wine Red',
    {
    cylinders: 2,
    engineNumber: 'Lol, who knows this',
    manufactured: 1995,
  },
  {
    name: 'Mazda',
    aka: "Mazda Motor Corporation",
    country: "Japan",
  },
  function () {
    const message = `${this.name} (${this.model}) is ${this.color} and has a top speed of ${this.topSpeed}.`;

    if (typeof alert === "function") {
      alert(message);
    } else {
      console.log(message);
    }
  },
  "The Mazda2 uses a rotary engine instead of piston cylinders.",

  ];
  //You access array elements using the number
  console.log(array1[5]);
  console.table(array1);
  console.log(array1[8])();

  //An array starts at zero

  /*
  Array Methods (functions are inbuilt)
  - push **add
  - Pop **remove/delete
   */

  /*
 HAVE ALL YOUR CAR VALUES FROM CAR OBJECT INSIDE THE ARRAY.
 ->add final element which is an array with your favourite numbers.
 ->ACCESS USING THE ARRAY ALL ITEMS.<DONT USE LOOP>
 ->use bracket notation
*/
//array length<size>
//array[0]
//loop to access all the elements.
// start an array starts at 0.
//end point ->any size//3 //20<>
for (let i = 0; i < array1.length; i++) {
  //0 to 20
  console.log("i is", i);
  console.log(array1[i]);
}



