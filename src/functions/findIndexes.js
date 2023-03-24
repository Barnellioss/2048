import gameOverFunc from "./gameOverFunc";

const findIndexes = (array) => {
    let indexes = [];
    if (array.length !== 0) {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (array[i][j].score === "") {
                    indexes.push([i, j])
                }
            }
        }
        return [indexes, false];
    }
    else {
        let isGameOver = gameOverFunc(array);
        return [indexes, isGameOver];
    }
}

export default findIndexes;