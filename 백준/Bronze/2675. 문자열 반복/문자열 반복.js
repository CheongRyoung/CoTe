const fs = require('fs');
const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); ///dev/stdin

for(let i=0; i<inputs[0]; i++) {
    const [R, S] = inputs[i+1].split(" ");
    const result = S.split("").map((v, i) => v.repeat(R));
    console.log(result.join(""));
}