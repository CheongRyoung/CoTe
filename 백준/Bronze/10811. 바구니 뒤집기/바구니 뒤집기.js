const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); ///dev/stdin

const N = Number(input[0].split(" ")[0]), M = Number(input[0].split(" ")[1]);
let arr = Array(N).fill(1).map((a, b) => a+b);

for(let i=1; i<input.length; i++) {
    const [N, M] = input[i].split(" ");
    const temp2 = Number(N) === 1 ? [] : arr.slice(0, N-1);
    const temp = arr.slice(N-1, M).reverse();
    const temp3 = arr.slice(M, arr.length);
    arr = [
        ...temp2,
        ...temp,
        ...temp3
    ]
}
console.log(arr.join(" "));