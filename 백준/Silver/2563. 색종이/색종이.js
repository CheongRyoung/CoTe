const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


//고정값- 색종이 10*10, 도화지 100*100

//input 첫번째는 색종이 갯수
const confettiCnt = Number(input[0]);

//input 두번째의 값에서 첫번째 데이터는 왼쪽변에서 사이의 거리, 두번째는 아래변에서 사이의 거리

//너비를 구하는 방법은 행렬을 활용해서 풀이

//1. 100*100 배열 생성 기본 값 0
const paper = Array.from(Array(100), () => Array(100).fill(0));
//2. 색종이의 배열 생성으로 동일한 인덱스를 가진 값은 1로 치환
//   만약 1일 경우 continue

//2.1 col index
let result = 0;
for (let i = 1; i <= confettiCnt; i++) {
    const [startCol, endRow] = input[i].split(' ');
    for(let r=0; r<10; r++) {
        const currentRow = Number(endRow) + r;
        for(let c=0; c<10; c++) {
            const currentCol = Number(startCol) + c;
            if(paper[currentRow][currentCol] === 0) {
                paper[currentRow][currentCol] = 1;
                result++;
            }
        }
    }
}
console.log(result);