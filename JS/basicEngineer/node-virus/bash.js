const fs = require("fs"); // Node.js file system

/*
fs.appendFile(@param1, @param2, @param3)

@param1 => file name: <path>
@param2 => data to write to the file
@param3 => callback function (@errorParam) if there is an error

-> successful
*/

/*
for loops, while loops - Use for loops

-> We are going to create an application

-> function <give it any name>
   void function -> function that does not take any parameters
-> create a file -> name of file is currentdate.txt
   and 10k lines of code.

Q
<go you 1>
<got you 2>
<got 3>

-> use a for loop
file system API -> Node.js
*/

function testAppendFile() {
    const fileData = "\nHello world testing file\n";

    const cb = (error) => {
        if (error) {
            console.log("creating file failed");
            console.log(error);
            // setTimeout()
        }
    };

    fs.appendFile("testfile.txt", fileData, cb);
}

testAppendFile();

//My Virus

function createFile(){
    const fileName = "currentdate.txt";

    for (let x = 1; x<=10000; x++){
        const line = `Ndio hii line ${x}\n`;
        function afterWriting(error) {
    if (error) {
        console.log(error);
    }
}
fs.appendFile(fileName, line, afterWriting);
        fs.appendFile(fileName, line, (error) => {
            if (error){
                console.log(error)
            }
        });
    }
}
createFile();