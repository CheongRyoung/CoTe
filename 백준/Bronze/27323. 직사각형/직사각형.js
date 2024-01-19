const fs = require('fs');
const S = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); ///dev/stdin

console.log(Number(S[0] * Number(S[1])));