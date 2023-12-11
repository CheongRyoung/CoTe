const fs = require('fs');
const N = fs.readFileSync("/dev/stdin").toString().trim(); ///dev/stdin

drawStar(1, Number(N));

function drawStar(loop, middle) {
    if(2*middle-1 < loop) {
        return;
    }
    if(loop < middle) {
        upStar(loop, middle);
    } else {
        downStar(loop, middle);
    }
    drawStar(loop + 1, middle)
}

function downStar(loop, middle) {
    const emptyCnt = 2*(loop-middle);
    const starCnt = 2*middle - 1 - emptyCnt;
    drawStarLine(emptyCnt, starCnt);
}

function upStar(loop, middle) {
    const starCnt = 2*loop - 1;
    const emptyCnt = 2*middle - 1 - starCnt;
    drawStarLine(emptyCnt, starCnt);
}

function drawStarLine(emptyCnt, starCnt) {
    const result = Array(emptyCnt + starCnt).fill().reduce(
        (a, c, i) => {
            if(i < emptyCnt/2) {
                a += " ";
            } else if(i < emptyCnt/2+starCnt) {
                a += "*";
            }
            return a;
        }, ""
    )
    console.log(result + " ");
}