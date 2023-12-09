const fs = require('fs');
const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); ///dev/stdin

inputs.forEach((v) => console.log(v));