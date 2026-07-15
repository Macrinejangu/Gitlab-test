/*

RETURN STATEMENT

A return statement has two purposes:

1. Exit a function.
2. Return any required data.
*/

/*
Scenario 1
Leave the function as it is.
Expected Output:
First Name Samson
Second Name Johnna
The Names Are Samson Johnna
Function returned undefined
*/

function sayMyNameScenario1() {
    let firstName = "Samson";
    console.log(`First Name ${firstName}`);

    let secondName = "Johnna";
    console.log(`Second Name ${secondName}`);

    let fullName = `${firstName} ${secondName}`;
    console.log(`The Names Are ${fullName}`);
}

let result1 = sayMyNameScenario1();
console.log(`Function returned ${result1}`);


/*
Scenario 2
Place a return after the second statement.
Expected Output:
First Name Samson
Function returned undefined
*/

function sayMyNameScenario2() {
    let firstName = "Samson";
    console.log(`First Name ${firstName}`);

    return;

    let secondName = "Johnna";
    console.log(`Second Name ${secondName}`);

    let fullName = `${firstName} ${secondName}`;
    console.log(`The Names Are ${fullName}`);
}

let result2 = sayMyNameScenario2();
console.log(`Function returned ${result2}`);


/*

Scenario 3
Place a return after the fourth statement.
Expected Output:
First Name Samson
Second Name Johnna
Function returned undefined
*/

function sayMyNameScenario3() {
    let firstName = "Samson";
    console.log(`First Name ${firstName}`);

    let secondName = "Johnna";
    console.log(`Second Name ${secondName}`);

    return;

    let fullName = `${firstName} ${secondName}`;
    console.log(`The Names Are ${fullName}`);
}

let result3 = sayMyNameScenario3();
console.log(`Function returned ${result3}`);


/*
Scenario 4
Return a string.
Expected Output:
First Name Samson
Second Name Johnna
Function returned Hello JavaScript!
*/

function sayMyNameScenario4() {
    let firstName = "Samson";
    console.log(`First Name ${firstName}`);

    let secondName = "Johnna";
    console.log(`Second Name ${secondName}`);

    return "Hello JavaScript!";
}

let result4 = sayMyNameScenario4();
console.log(`Function returned ${result4}`);


/*
Scenario 5
Return a number.
Expected Output:
First Name Samson
Function returned 100
*/

function sayMyNameScenario5() {
    let firstName = "Samson";
    console.log(`First Name ${firstName}`);

    return 100;
}

let result5 = sayMyNameScenario5();
console.log(`Function returned ${result5}`);


/*
Scenario 6
Return a boolean.
Expected Output:
First Name Samson
Function returned true
*/

function sayMyNameScenario6() {
    let firstName = "Samson";
    console.log(`First Name ${firstName}`);

    return true;
}

let result6 = sayMyNameScenario6();
console.log(`Function returned ${result6}`);