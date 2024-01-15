const fs = require('fs');
//const input = fs.readFileSync('/app/codingtest/stdin').toString().trim().replace(/\r/g, "").split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//약수 중 k번째로 작은 수
const N = Number(input[0].split(" ")[0]);
let K = Number(input[0].split(" ")[1]);
let result = 0;
for(let i= 1; i<=N; i++) {
    if(N % i === 0) {
        K -= 1;
        result = i;
    }
    if(K === 0) {
        break;
    }
}
console.log(K === 0 ? result : 0);

