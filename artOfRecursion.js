function createEmptyMatrix(size) {
    return Array(size).fill().map(() => Array(size).fill(' '));
}

function drawDiamond(matrix, x, y, size, char) {
    // Draw diamond using characters
    const mid = Math.floor(size / 2);

    // Draw the diamond pattern
    for (let i = 0; i < size; i++) {
        const distFromMid = Math.abs(i - mid);
        const start = distFromMid;
        const end = size - distFromMid;

        for (let j = start; j < end; j++) {
            if (y + i >= 0 && y + i < matrix.length &&
                x + j >= 0 && x + j < matrix[0].length) {
                matrix[y + i][x + j] = char;
            }
        }
    }
}

export function diamondPattern(char1 = '*', char2 = '#', size = 21) {
    if (size % 2 === 0) size++; // Ensure odd size for better symmetry
    const matrix = createEmptyMatrix(size);

    function drawRecursive(x, y, currentSize, depth = 0) {
        if (currentSize < 3) return; // Base case

        // Draw current diamond
        drawDiamond(
            matrix,
            x,
            y,
            currentSize,
            depth % 2 === 0 ? char1 : char2
        );

        // Calculate next size and position
        const newSize = Math.floor(currentSize * 0.7);
        if (newSize < 3) return;

        const offset = Math.floor((currentSize - newSize) / 2);
        drawRecursive(x + offset, y + offset, newSize, depth + 1);
    }

    drawRecursive(0, 0, size);

    // Convert matrix to string
    return matrix
        .map(row => row.join(''))
        .join('\n');
}

// Test the pattern with different sizes
console.log(diamondPattern('*', '#', 21));
console.log('\nSmaller pattern:');
console.log(diamondPattern('@', 'O', 11));


