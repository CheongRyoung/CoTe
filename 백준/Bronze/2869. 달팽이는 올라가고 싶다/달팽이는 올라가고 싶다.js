const fs = require('fs');
//const input = fs.readFileSync('/app/codingtest/stdin').toString().trim().replace(/\r/g, "").split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [A, B, V] = input[0].split(" ");

const result = Math.ceil((parseFloat(V) - parseFloat(B))/(parseFloat(A) - parseFloat(B)));
console.log(result);