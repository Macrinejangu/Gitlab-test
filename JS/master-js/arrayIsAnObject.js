/*
The differences between an array and an object
- In an array, keys are sequencial whereas in an object, the keys are not sequential
 */

/*
Create an object that behaves like an array
1. create an array, give it an name
Inside the array, have two digits
0-any digit
1-any digit
2. creat an object
Inside the object, have any keys
For the object, create the length key
 */

const ar = [20, 5]; //push,pop,<non sequential keys:Don't store them>
const arObj = {
  0: 20,
  1: 5,
  push: function (newItem) {
    //this <Access object inside object>instead of using the object name
    const key = this.length; //current key
    this[key] = newItem; //element added to that key
    this.length = this.length + 1; //incriment the length
  },
  length: 2,
};
console.table(ar);
console.table(arObj);
const node1 = {
  location: "CBD",
};
const node2 = {
  location: "Machakos",
};
const node3 = {
  location: "Mombasa",
};

node1.nodeA = node2;
node1.nodeB = node3;

node2.nodeA = node1;
node2.nodeB = node3;

node3.nodeA = node1;
node3.nodeB = node2;