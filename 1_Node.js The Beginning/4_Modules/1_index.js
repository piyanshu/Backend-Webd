// Module is a library or a set of reusable functions
/*
Humare pass ek file hai jiske andar humne arithmetic opertaions ko add kiya hua hai which is known as module
ek aur file hai, jo doosri file se arithmetic operations ko use kar rhi hai then that another file is module
*/
// Importing the modules into this file 
const operations = require('./2_operations');
console.log(operations);
console.log(operations.add(2, 3));
console.log(operations.multiply(4, 5));