function matrixMultiply(A, B, C, n) {
    if (n === 1) {
        C[0][0] = A[0][0] * B[0][0];
    } else {
        let mid = Math.floor(n / 2);
        
        // Divide matrices into submatrices
        let A11 = A.slice(0, mid).map(row => row.slice(0, mid));
        let A12 = A.slice(0, mid).map(row => row.slice(mid, n));
        let A21 = A.slice(mid, n).map(row => row.slice(0, mid));
        let A22 = A.slice(mid, n).map(row => row.slice(mid, n));
        
        let B11 = B.slice(0, mid).map(row => row.slice(0, mid));
        let B12 = B.slice(0, mid).map(row => row.slice(mid, n));
        let B21 = B.slice(mid, n).map(row => row.slice(0, mid));
        let B22 = B.slice(mid, n).map(row => row.slice(mid, n));
        
        // Initialize submatrices for C
        let C11 = Array(mid).fill().map(() => Array(mid).fill(0));
        let C12 = Array(mid).fill().map(() => Array(mid).fill(0));
        let C21 = Array(mid).fill().map(() => Array(mid).fill(0));
        let C22 = Array(mid).fill().map(() => Array(mid).fill(0));
        
        // Recursive calls to compute C submatrices
        matrixMultiply(A11, B11, C11, mid);
        matrixMultiply(A12, B21, C11, mid);

        matrixMultiply(A11, B12, C12, mid);
        matrixMultiply(A12, B22, C12, mid);

        matrixMultiply(A21, B11, C21, mid);
        matrixMultiply(A22, B21, C21, mid);

        matrixMultiply(A21, B12, C22, mid);
        matrixMultiply(A22, B22, C22, mid);
        
        // Combine results into the resulting matrix C
        for (let i = 0; i < mid; i++) {
            for (let j = 0; j < mid; j++) {
                C[i][j] = C11[i][j];
                C[i][j + mid] = C12[i][j];
                C[i + mid][j] = C21[i][j];
                C[i + mid][j + mid] = C22[i][j];
            }
        }
    }
}

// Example matrices
let A = [
    [1, 2],
    [3, 4]
];

let B = [
    [5, 6],
    [7, 8]
];

let n = 2;  // Size of the matrix

// Initialize result matrix C
let C = Array(n).fill().map(() => Array(n).fill(0));

// Perform matrix multiplication
matrixMultiply(A, B, C, n);

// Output the resulting matrix
console.log("Resulting matrix C:");
for (let row of C) {
    console.log(row);
}


// Matrix Multiply Recursive


