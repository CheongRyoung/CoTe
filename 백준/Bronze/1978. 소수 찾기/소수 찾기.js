const fs = require('fs');
const S = fs.readFileSync("/dev/stdin").toString().trim().split('\n'); ///dev/stdin

const arr = S[1].split(" ");
const store = new Array(1000+1).fill(true);
store[1] = false;
for (let i = 2; i < store.length; i++) {
    if (store[i] === true) {
        let j = 2;
        while (i * j < store.length) {
            store[i * j] = false;
            j++;
        }
    }
}
const result = arr.reduce((p, c, i) => {
    if (store[Number(c)]) {
        p++;
    }
    return p;
}, 0);
console.log(result);