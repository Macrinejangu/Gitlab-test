/*
We are creating callback functions that calculate
the area of different shapes.
Shapes:
1. Circle
2. Rectangle
3. Triangle
Each shape has its own arrow function.
We will then use a callback function to display the result.
*/

//Cicle Area Function
//Formula pi * radious * radius
//Arrow
const CircleArea = (radius) => {
    return Math.PI * radius * radius;
};

console.log(CircleArea, "circle", 7);

// This function calculates the area of a circle. It takes the radius as input and returns the area using the formula pi × radius * 2.

// Rectangle Area Function
// Formula: length × width

const RectangleArea = (length, width) => {
    return length * width;
}; 

console.log(RectangleArea, "rectangle", 10, 5);

// This function calculates the area of a rectangle. It takes the length and width, multiplies them, and returns the area.

// Triangle Area Function
// Formula: 0.5 × base × height

const TriangleArea = (base, height) => {
    return 0.5 * base * height;
};
console.log(TriangleArea, "triangle", 8, 6);

// This function calculates the area of a triangle. It takes the base and height, multiplies them, divides by 2, and returns the area.

/*

CALLBACK FUNCTIONS - EXERCISE 2
In this exercise we create a "super function" called shape().
The shape() function receives:
1. The function to execute (callback)
2. The name of the shape
3. First measurement (required)
4. Second measurement (optional)
5. Third measurement (optional)
It then:
- Displays every parameter
- Displays each parameter's data type
- Executes the callback function
*/

// Super function

const shape = (shapeFunction, shapeName, s1, s2, s3) => { //s means side
    console.log("Function:", shapeFunction);
    console.log("Shape:", shapeName);
    console.log("Parameter 1:", s1);
    console.log("Parameter 2:", s2);
    console.log("Parameter 3:", s3);

    console.log("Function Type:", typeof shapeFunction);
    console.log("Shape Type:", typeof shapeName);
    console.log("Parameter 1 Type:", typeof s1);
    console.log("Parameter 2 Type:", typeof s2);
    console.log("Parameter 3 Type:", typeof s3);

    // Call the callback function
    const result = shapeFunction(s1, s2, s3);
    console.log(`Shape: ${shapeName}, Area is ${result}`);
};
//Test Circle
shape(CircleArea, "Circle", 7)

//Test Rectangle
shape(RectangleArea, "Rectangle", 10, 5);

//Super Function Triangle
shape(TriangleArea, "Triangle", 12, 8);

/*
The shape() function does not need to know how to calculate the areas of shapes. 
Its job is to receive the correct function, display the information passed to it, and execute that function.
*/