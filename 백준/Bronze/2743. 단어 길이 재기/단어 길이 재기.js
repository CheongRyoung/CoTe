const fs = require('fs');
const [S] = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); //

console.log(S.length);