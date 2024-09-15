const lib = require('./lib.js')

const express = require('express');

console.log("Hello interupt ");

const server = express();
server.listen(8000);




















// import {sum,diff} from './lib.js';
// const fs = require('fs');

// const t1 = performance.now();

// const txt = fs.readFileSync('demo.txt','utf-8');

// fs.readFile('demo.txt','utf-8',(err,txt)=>{
//     console.log(txt);   
// });

// console.log(txt);  

// console.log(lib.sum(5,4),lib.diff(4,3));
// const t2 = performance.now();
// console.log(t2-t1);



