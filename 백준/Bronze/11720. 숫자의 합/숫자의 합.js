const fs = require('fs');
const [N, S] = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); ///dev/stdin

console.log(S.split("").reduce(function(p, c) {
    return Number(p) + Number(c);
}, 0));