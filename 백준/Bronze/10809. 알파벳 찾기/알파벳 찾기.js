const fs = require('fs');
const [S] = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); ///dev/stdin
var alphabets = Array(26).fill()
    .map((v, i) => S.indexOf(String.fromCharCode(i + 97)));
console.log(alphabets.join(" "));