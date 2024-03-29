// let fs = require('fs');

// let file1 = fs.readFileSync('./content/subfolder/index.txt','utf8');

// console.log(file1);

const { error } = require("console");
const fs = require("fs");

// Read the contents of the file synchronously
let file1 = fs.readFileSync('./node-js/contentDummy/index.txt', 'utf8');

// Output the contents of the file
console.log(file1);



let file2 = fs.readFileSync('node-js/contentDummy/index2.txt','utf8');
console.log(file2);

fs.writeFileSync('node-js/contentDummy/index3.txt',`${file1}`)


// fs.readFileSync & fs.writeFileSync    both are blocking the code help to work synchronously one after one

// but fs.readFile & fs.writeFile  both are async operation belongs that


fs.readFile('./node-js/contentDummy/index.txt','utf8',(error,data)=>{
    console.log(data);
})


fs.writeFile('./node-js/contentDummy/index4.txt','hello prem',(error,data)=>{
    console.log(data);
})