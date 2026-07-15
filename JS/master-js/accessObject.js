/*
How do you access objects?
1. Dot notation
Use a dot followed by the property name.
console.log(student.name);   // Amina
console.log(student.age);    // 20
console.log(student.course); // Software Development
Prints as: “Get the `name` inside `student`.”

Use dot notation when the property name is simple: no spaces, no symbols, and it does not start with a number.
*/

/*
2. Bracket notation
Put the property name inside square brackets and quotes.
console.log(student["name"]);   // Amina
console.log(student["age"]);    // 20
console.log(student["course"]); // Software Development
For normal property names, dot notation and bracket notation give the same result:
student.name;     // Amina
student["name"]; // Amina
Use brackets when a property name has a space, a symbol, or is a number.

 */

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

    if (typeof alert === "function") {
      alert(message);
    } else {
      console.log(message);
    }
  },
} 



/*
ASSIGNMENT: Read properties in two ways.

  1. Dot notation: car.name
  2. Bracket notation: car["name"]

  Both give the same result for normal keys such as "name".
*/

console.log("Basic properties");
console.log(`Dot: ${car.name} | type: ${typeof car.name}`);
console.log(`Bracket: ${car["name"]} | type: ${typeof car["name"]}`);

console.log(`Dot: ${car.model} | type: ${typeof car.model}`);
console.log(`Bracket: ${car["model"]} | type: ${typeof car["model"]}`);

console.log(`Dot: ${car.topSpeed} | type: ${typeof car.topSpeed}`);
console.log(`Bracket: ${car["topSpeed"]} | type: ${typeof car["topSpeed"]}`);

console.log(`Dot: ${car.color} | type: ${typeof car.color}`);
console.log(`Bracket: ${car["color"]} | type: ${typeof car["color"]}`);

console.log(`Dot: ${car.isClassic} | type: ${typeof car.isClassic}`);
console.log(`Bracket: ${car["isClassic"]} | type: ${typeof car["isClassic"]}`);

console.log("Nested properties");
console.log(`Dot: ${car.engineInformation.cylinders} | type: ${typeof car.engineInformation.cylinders}`);
console.log(`Bracket: ${car["engineInformation"]["cylinders"]} | type: ${typeof car["engineInformation"]["cylinders"]}`);

console.log(`Dot: ${car.engineInformation.engineNumber} | type: ${typeof car.engineInformation.engineNumber}`);
console.log(`Bracket: ${car["engineInformation"]["engineNumber"]} | type: ${typeof car["engineInformation"]["engineNumber"]}`);

console.log(`Dot: ${car.engineInformation.manufactured} | type: ${typeof car.engineInformation.manufactured}`);
console.log(`Bracket: ${car["engineInformation"]["manufactured"]} | type: ${typeof car["engineInformation"]["manufactured"]}`);

console.log(`Dot: ${car.manufacturer.name} | type: ${typeof car.manufacturer.name}`);
console.log(`Bracket: ${car["manufacturer"]["name"]} | type: ${typeof car["manufacturer"]["name"]}`);

console.log(`Dot: ${car.manufacturer.aka} | type: ${typeof car.manufacturer.aka}`);
console.log(`Bracket: ${car["manufacturer"]["aka"]} | type: ${typeof car["manufacturer"]["aka"]}`);

console.log(`Dot: ${car.manufacturer.country} | type: ${typeof car.manufacturer.country}`);
console.log(`Bracket: ${car["manufacturer"]["country"]} | type: ${typeof car["manufacturer"]["country"]}`);

// Dot notation cannot read a key with a space or a number-only key.
console.log(`Bracket: ${car["fun fact"]} | type: ${typeof car["fun fact"]}`);
console.log(`Bracket: ${car[7]} | type: ${typeof car[7]}`);

console.log("Method property");
console.log(`Dot type: ${typeof car.alert_info}`);
console.log(`Bracket type: ${typeof car["alert_info"]}`);


car.alert_info();

/*
Updating Object data 
Before you can update the data, you need to be able to access the data
And remember, we access object data through:
dot notation
bracket notation

*/