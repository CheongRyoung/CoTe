const fs = require('fs');
const S = fs.readFileSync("/dev/stdin").toString().trim(); ///dev/stdin

let N = Number(S);

const store = new Array(N + 1).fill(true);

for (let i = 2; i < store.length; i++) {
    if (store[i] === true) {
        let j = 2;
        while (i * j < store.length) {
            if(store[i * j] === true) {
                store[i * j] = i;
            }
            j++;
        }
    }
}
if(N !== 1) {
    while(true) {
        if (store[N] === true) {
            console.log(N);
            break;
        }
        console.log(store[N]);
        N = N / store[N];
    }
}
