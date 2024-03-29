const path = require('path');

console.log(path.sep);

// to find path of file

const filename = path.join('content','subfolder','index.txt');
console.log(filename);

// acces last file using base

const base = path.basename(filename);
console.log(base);

// absolute path

const absolute =path.resolve(__dirname,'content','subfolder','index.txt');

console.log(absolute);