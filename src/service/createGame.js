export const createGame = () => {
    const blocks = [];
    for (let i = 0; i < 3; i++){
        const row = [];
        for( let j = 0; j < 3; j++){
            row.push({
                numberI: i,
                numberJ: j,
                value: 0
            });
        }
        blocks.push(row);
    }
    return blocks;
}