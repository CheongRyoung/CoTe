const fs = require('fs');
const [S, I] = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); ///dev/stdin

console.log(S.slice(I-1, I));