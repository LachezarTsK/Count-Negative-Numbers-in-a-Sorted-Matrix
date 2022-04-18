
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    if (grid.length === 0) {
        return 0;
    }

    const rows = grid.length;
    const columns = grid[0].length;
    if (grid[0][0] < 0) {
        return rows * columns;
    }

    let countNegativeNumbers = 0;
    for (let row of grid) {
        if (row[columns - 1] >= 0) {
            continue;
        }
        if (row[0] < 0) {
            countNegativeNumbers += columns;
            continue;
        }
        countNegativeNumbers += numberOfNegativesInCurrentRow(row, columns);
    }
    return countNegativeNumbers;
};

/**
 * @param {number[]} row
 * @param {number} columns 
 * @return {number}
 */
function numberOfNegativesInCurrentRow(row, columns) {
    let left = 0;
    let right = columns - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (row[mid] < 0 && (mid - 1 < 0 || row[mid - 1] >= 0)) {
            return columns - mid;
        }

        if (row[mid] >= 0) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return 0;
}
