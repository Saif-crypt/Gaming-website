document.getElementById('check-button').addEventListener('click', function() {
    const grid = [];
    const inputs = document.querySelectorAll('#sudoku-grid input');

    // Create 2D array from inputs
    for (let i = 0; i < 9; i++) {
        grid[i] = [];
        for (let j = 0; j < 9; j++) {
            const value = inputs[i * 9 + j].value;
            grid[i][j] = value ? parseInt(value) : 0;
        }
    }

    if (isValidSudoku(grid)) {
        document.getElementById('result').textContent = 'Sudoku is correct!';
    } else {
        document.getElementById('result').textContent = 'Sudoku is incorrect.';
    }
});

function isValidSudoku(grid) {
    // Helper function to check if an array contains duplicates
    function hasDuplicates(arr) {
        const seen = new Set();
        for (let num of arr) {
            if (num !== 0 && seen.has(num)) {
                return true;
            }
            seen.add(num);
        }
        return false;
    }

    // Check rows
    for (let i = 0; i < 9; i++) {
        if (hasDuplicates(grid[i])) {
            return false;
        }
    }

    // Check columns
    for (let i = 0; i < 9; i++) {
        const col = [];
        for (let j = 0; j < 9; j++) {
            col.push(grid[j][i]);
        }
        if (hasDuplicates(col)) {
            return false;
        }
    }

    // Check 3x3 subgrids
    for (let row = 0; row < 9; row += 3) {
        for (let col = 0; col < 9; col += 3) {
            const subgrid = [];
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    subgrid.push(grid[row + i][col + j]);
                }
            }
            if (hasDuplicates(subgrid)) {
                return false;
            }
        }
    }

    return true;
}
