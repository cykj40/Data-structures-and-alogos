function createEmptyMatrix(width, height) {
    return Array(height).fill().map(() => Array(width).fill(' '));
}

function drawBorder(matrix, x, y, width, height, char) {
    // Draw top and bottom borders
    for (let i = x; i < x + width; i++) {
        if (i >= 0 && i < matrix[0].length) {
            if (y >= 0 && y < matrix.length) matrix[y][i] = char;
            if (y + height - 1 >= 0 && y + height - 1 < matrix.length) matrix[y + height - 1][i] = char;
        }
    }
    // Draw side borders
    for (let i = y; i < y + height; i++) {
        if (i >= 0 && i < matrix.length) {
            if (x >= 0 && x < matrix[0].length) matrix[i][x] = char;
            if (x + width - 1 >= 0 && x + width - 1 < matrix[0].length) matrix[i][x + width - 1] = char;
        }
    }
}

function drawText(matrix, text, startX, startY) {
    const letters = {
        C: [
            " ███ ",
            "█   █",
            "█    ",
            "█   █",
            " ███ "
        ],
        Y: [
            "█   █",
            " █ █ ",
            "  █  ",
            "  █  ",
            "  █  "
        ],
        R: [
            "████ ",
            "█   █",
            "████ ",
            "█  █ ",
            "█   █"
        ],
        U: [
            "█   █",
            "█   █",
            "█   █",
            "█   █",
            " ███ "
        ],
        S: [
            " ███ ",
            "█    ",
            " ███ ",
            "    █",
            "████ "
        ]
    };

    text.split('').forEach((char, index) => {
        const letterPattern = letters[char];
        if (letterPattern) {
            letterPattern.forEach((row, i) => {
                row.split('').forEach((pixel, j) => {
                    const x = startX + (index * 6) + j;
                    const y = startY + i;
                    if (pixel !== ' ' && y < matrix.length && x < matrix[0].length) {
                        matrix[y][x] = pixel;
                    }
                });
            });
        }
    });
}

function recursiveBorderPattern(size = 40, depth = 4) {
    const matrix = createEmptyMatrix(size, Math.floor(size * 0.5));

    function drawRecursive(x, y, width, height, currentDepth) {
        if (currentDepth <= 0 || width < 4 || height < 4) return;

        const char = currentDepth % 2 === 0 ? '█' : '░';
        drawBorder(matrix, x, y, width, height, char);

        // Calculate new dimensions for recursive call
        const newX = x + 2;
        const newY = y + 1;
        const newWidth = width - 4;
        const newHeight = height - 2;

        drawRecursive(newX, newY, newWidth, newHeight, currentDepth - 1);
    }

    // Draw the recursive border pattern
    drawRecursive(0, 0, size, matrix.length, depth);

    // Draw CYRUS in the middle
    const textStartX = Math.floor((size - 28) / 2); // 28 is approximate width of "CYRUS"
    const textStartY = Math.floor((matrix.length - 5) / 2); // 5 is height of letters
    drawText(matrix, "CYRUS", textStartX, textStartY);

    // Convert matrix to string
    return matrix.map(row => row.join('')).join('\n');
}

// Print different sizes of the pattern
console.log(recursiveBorderPattern(40, 4));
console.log('\nSmaller version:');
console.log(recursiveBorderPattern(30, 3));


