function gameOfLife(board) {
    const rows = board.length;
    const cols = board[0].length;

    const directions = [
        [0, 1], [1, 0], [1, 1], [-1, 0],
        [0, -1], [-1, -1], [-1, 1], [1, -1]
    ];

    // First pass: Calculate new states and mark them using temporary states.
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let liveNeighbors = 0;

            // Count live neighbors
            for (const [dx, dy] of directions) {
                const nr = r + dx;
                const nc = c + dy;

                if (nr >= 0 && nc >= 0 && nr < rows && nc < cols) {
                    liveNeighbors += board[nr][nc] & 1; // Only check the current state
                }
            }

            // Apply the Game of Life rules
            if ((board[r][c] & 1) === 1) { // Cell is alive
                if (liveNeighbors === 2 || liveNeighbors === 3) {
                    board[r][c] = 3; // Current alive, next alive (binary 11)
                } else {
                    board[r][c] = 1; // Current alive, next dead (binary 01)
                }
            } else { // Cell is dead
                if (liveNeighbors === 3) {
                    board[r][c] = 2; // Current dead, next alive (binary 10)
                } else {
                    board[r][c] = 0; // Current dead, next dead (binary 00)
                }
            }
        }
    }

    // Second pass: Convert the temporary states into final states
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            board[r][c] >>= 1; // Shift the bits to get the final state (0 or 1)
        }
    }
}


gameOfLife([[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]])