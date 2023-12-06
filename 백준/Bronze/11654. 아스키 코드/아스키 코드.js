const fs = require('fs');
const [S] = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); ///dev/stdin

console.log(S.charCodeAt());