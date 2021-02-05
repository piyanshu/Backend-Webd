// We can see the output using the command - node .\1_index.js
/* These functions are executed on our systems by using nodejs 
 and nodejs being un using v8 engine and v8 is written on c++
*/
console.log('Hello World');

function add(a, b)
{
    return a+b;
}
console.log(add(4, 5));

console.log(process.argv);
// process is a global object
// What is process.argv??
// It looks on the complete environment that the node file is running in
// All the agruements that can be passed to this file are looked upon by this process
// When we run this file we do - node .\1_index.js 1 2 - it prints
/*
[
  'D:\\New folder (2)\\node.exe',
  'C:\\Users\\piyanshu\\Desktop\\IMPLEMENTATIONS\\Backend Webd\\1_Node.js The Beginning\\3_NODEWS\\1_index.js',
  '1',
  '2'
]
*/
// In array 1. the path from where the nodejs file is running
// 2. node js jis file ko run kar rha hai uska path
// 3 and 4 the arguements user can pass

// using process.argv we can call our add func
var args = process.argv.slice(2);
console.log(add(parseInt(args[0]), parseInt(args[1])));