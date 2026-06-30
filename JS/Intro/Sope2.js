let name = "Samson";
let name = "Peter"; // SyntaxError: Identifier 'name' has already been declared. Caught before runtime — the entire script is blocked

function sayMyName (){ 
    console.log(`Name: ${name} Line: 4`) //Code will not run, error will be "ReferenceError: Cannot access 'name' before initialization"
    let name = "Maggy"; 
    console.log(`Name: ${name} Line: 6`) 
    if(true){
        let name = "Delilah"
        console.log(`Name: ${name} Line: 9`)
    }
    console.log(`Name: ${name} Line: 11`)
}
sayMyName();
