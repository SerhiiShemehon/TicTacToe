export const isWin = (blocks) => {
    if(blocks.length){
        for (let i = 0; i < 3; i++){
            let sunRow = 0;
            let sunColumn = 0;

            for (let j = 0; j < 3; j++){
                sunRow = sunRow + blocks[i][j].value;
                sunColumn = sunColumn + blocks[j][i].value;
            }

            if (sunRow === 3 || sunColumn === 3) {
                return 'Winner X';
            } else if (sunRow === 30 || sunColumn === 30) {
                return 'Winner O';
            }
        }
        let sumDiagonal1 = blocks[0][0].value + blocks[1][1].value + blocks[2][2].value;
        let sumDiagonal2 = blocks[0][2].value + blocks[1][1].value + blocks[2][0].value;

        if (sumDiagonal1 === 3 || sumDiagonal2 === 3) {
            return 'Winner X';
        } else if (sumDiagonal1 === 30 || sumDiagonal2 === 30) {
            return 'Winner O';
        }
    }
    return false;
}