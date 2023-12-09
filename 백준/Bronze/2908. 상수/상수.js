const fs = require('fs');
const [F, S] = fs.readFileSync("/dev/stdin").toString().trim().split(" "); ///dev/stdin

const first = Number(String(F).split("").reverse().join(""));
const second = Number(String(S).split("").reverse().join(""));

console.log(first < second ? second : first);