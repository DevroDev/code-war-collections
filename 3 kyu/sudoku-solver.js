function sudoku(puzzle) {
    let unsolved = 9 * 9;
    let i = 0, j, firstPass = true;
    while (i < puzzle.length) {
        j = 0;
        while (j < puzzle.length) {
            if (puzzle[i][j] === 0) {
                let values = findAllowableValues(puzzle, i, j);
                if (values.length === 1) {
                    puzzle[i][j] = values[0];
                    unsolved--;
                }
            } else if (firstPass) {
                unsolved--;
            }
            if (unsolved > 0 && i === puzzle.length - 1 && i === j) {
                i = 0;
                j = 0;
                firstPass = false;
                continue;
            }
            j++;
        }
        i++;
    }
    return puzzle;
}

function findAllowableValues(puzzle, x, y) {
    const allValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const x2 = Math.trunc(x / 3) * 3;
    const y2 = Math.trunc(y / 3) * 3;
    const allowableValues = new Set();
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let k = i * 3 + j;
            allowableValues.add(puzzle[x][k]);
            allowableValues.add(puzzle[k][y]);
            allowableValues.add(puzzle[x2 + i][y2 + j]);
        }
    }
    return allValues.filter(e => !allowableValues.has(e))
}