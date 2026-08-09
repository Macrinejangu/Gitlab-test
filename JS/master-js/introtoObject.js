/*
Objects are complext data types
They are datatypes that houses other datatypes

In real life, you cannot really express data using single variables

An object stores related information in one place. Each item has:
  - a key (also called a property name)
  - a value

  Why objects are useful - When using objects, it's called Object oriented programming
  - you use them if you want to present complex data types
  */

 //Example

    const car = {
  // Basic car information
  name: 'Mazda2',
  model: 'AWD-2018',
  topSpeed: '180 km/h',
  color: 'Wine Red',
  isClassic: true,

// An object can contain another object. This is called a nested object.
  engineInformation: {
    cylinders: 2,
    engineNumber: 'Lol, who knows this',
    manufactured: 1995,
  },

  manufacturer: {
    name: 'Mazda',
    aka: "Mazda Motor Corporation",
    country: "Japan",
  },
  // A number can be an object key. JavaScript stores it as the text "7".
  7: 1992,

  // Keys with spaces are allowed, but must be inside quotes.
  "fun fact": "The Mazda2 uses a rotary engine instead of piston cylinders.",

  // A function inside an object is called a method.
  alert_info: function () {
    const message = `${this.name} (${this.model}) is ${this.color} and has a top speed of ${this.topSpeed}.`;

    // alert() works in a browser. console.log() lets this example also work in Node.js.
    if (typeof alert === "function") {
      alert(message);
    } else {
      console.log(message);
    }
  },
} 

