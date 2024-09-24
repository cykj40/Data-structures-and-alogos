// Function to add two matrices
function addMatrices(matrix1, matrix2) {
    let n = matrix1.length;
    let result = new Array(n).fill(null).map(() => new Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    return result;
}

// Function to subtract two matrices
function subMatrices(matrix1, matrix2) {
    let n = matrix1.length;
    let result = new Array(n).fill(null).map(() => new Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result[i][j] = matrix1[i][j] - matrix2[i][j];
        }
    }

    return result;
}

// Strassen's Algorithm for matrix multiplication
function strassensMultiplyMatrices(matrix1, matrix2) {
    let n = matrix1.length;
    let result = new Array(n).fill(null).map(() => new Array(n).fill(0));

    // Base case when the matrix is 1x1
    if (n === 1) {
        result[0][0] = matrix1[0][0] * matrix2[0][0];
        return result;
    }

    // Divide matrices into submatrices
    let a11 = new Array(n / 2).fill(null).map(() => new Array(n / 2).fill(0));
    let a12 = new Array(n / 2).fill(null).map(() => new Array(n / 2).fill(0));
    let a21 = new Array(n / 2).fill(null).map(() => new Array(n / 2).fill(0));
    let a22 = new Array(n / 2).fill(null).map(() => new Array(n / 2).fill(0));
    let b11 = new Array(n / 2).fill(null).map(() => new Array(n / 2).fill(0));
    let b12 = new Array(n / 2).fill(null).map(() => new Array(n / 2).fill(0));
    let b21 = new Array(n / 2).fill(null).map(() => new Array(n / 2).fill(0));
    let b22 = new Array(n / 2).fill(null).map(() => new Array(n / 2).fill(0));

    for (let i = 0; i < n / 2; i++) {
        for (let j = 0; j < n / 2; j++) {
            a11[i][j] = matrix1[i][j];
            a12[i][j] = matrix1[i][j + n / 2];
            a21[i][j] = matrix1[i + n / 2][j];
            a22[i][j] = matrix1[i + n / 2][j + n / 2];
            b11[i][j] = matrix2[i][j];
            b12[i][j] = matrix2[i][j + n / 2];
            b21[i][j] = matrix2[i + n / 2][j];
            b22[i][j] = matrix2[i + n / 2][j + n / 2];
        }
    }

    // Recursively compute p1 to p7
    let p1 = strassensMultiplyMatrices(addMatrices(a11, a22), addMatrices(b11, b22));
    let p2 = strassensMultiplyMatrices(addMatrices(a21, a22), b11);
    let p3 = strassensMultiplyMatrices(a11, subMatrices(b12, b22));
    let p4 = strassensMultiplyMatrices(a22, subMatrices(b21, b11));
    let p5 = strassensMultiplyMatrices(addMatrices(a11, a12), b22);
    let p6 = strassensMultiplyMatrices(subMatrices(a21, a11), addMatrices(b11, b12));
    let p7 = strassensMultiplyMatrices(subMatrices(a12, a22), addMatrices(b21, b22));

    // Compute c11, c12, c21, c22
    let c11 = addMatrices(subMatrices(addMatrices(p1, p4), p5), p7);
    let c12 = addMatrices(p3, p5);
    let c21 = addMatrices(p2, p4);
    let c22 = addMatrices(subMatrices(addMatrices(p1, p3), p2), p6);

    // Combine the submatrices into the result matrix
    for (let i = 0; i < n / 2; i++) {
        for (let j = 0; j < n / 2; j++) {
            result[i][j] = c11[i][j];
            result[i][j + n / 2] = c12[i][j];
            result[i + n / 2][j] = c21[i][j];
            result[i + n / 2][j + n / 2] = c22[i][j];
        }
    }

    return result;
}

// Example usage
console.log(strassensMultiplyMatrices([[1, 3], [7, 5]], [[6, 8], [4, 2]]));
// Output: [[18, 14], [62, 66]]


// Time Complexity: O(n^2.81)