const fs = require('fs');
const inputs = fs.readFileSync("/dev/stdin").toString().trim().split(" "); ///dev/stdin

const 체스 = [1,1,2,2,2,8];
const result = inputs.map((v, i) => {
    return 체스[i] - Number(v);
})
console.log(result.join(" "));