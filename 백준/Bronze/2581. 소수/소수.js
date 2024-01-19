const fs = require('fs');
const S = fs.readFileSync("/dev/stdin").toString().trim().split('\n'); ///dev/stdin

const start = Number(S[0]);
const end = Number(S[1]);

const store = new Array(end+1).fill(true);
store[1] = 1;

let min = -1;
let sum = 0;
for (let i = 2; i < store.length; i++) {
    if (store[i] === true) {
        if (start <= i && min < 0) {
            min = i;
        }
        
        if(start <= i && end >= i) {
            sum += i;
        }
        
        let j = 2;
        while (i * j < store.length) {
            store[i * j] = false;
            j++;
        }
    }
}
if(min < 0) {
    console.log(min);
} else {
    console.log(sum + '\n' + min);
}