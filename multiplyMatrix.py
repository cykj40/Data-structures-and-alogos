def matrix_multiply(A, B, C, n):
    if n == 1:
        C[0][0] = A[0][0] * B[0][0]
    else:
        mid = n // 2
        
        # Divide matrices into submatrices
        A11 = [row[:mid] for row in A[:mid]]
        A12 = [row[mid:] for row in A[:mid]]
        A21 = [row[:mid] for row in A[mid:]]
        A22 = [row[mid:] for row in A[mid:]]
        
        B11 = [row[:mid] for row in B[:mid]]
        B12 = [row[mid:] for row in B[:mid]]
        B21 = [row[:mid] for row in B[mid:]]
        B22 = [row[mid:] for row in B[mid:]]
        
        # Initialize submatrices for C
        C11 = [[0] * mid for _ in range(mid)]
        C12 = [[0] * mid for _ in range(mid)]
        C21 = [[0] * mid for _ in range(mid)]
        C22 = [[0] * mid for _ in range(mid)]
        
        # Recursive calls to compute C submatrices
        matrix_multiply(A11, B11, C11, mid)
        matrix_multiply(A12, B21, C11, mid)

        matrix_multiply(A11, B12, C12, mid)
        matrix_multiply(A12, B22, C12, mid)

        matrix_multiply(A21, B11, C21, mid)
        matrix_multiply(A22, B21, C21, mid)

        matrix_multiply(A21, B12, C22, mid)
        matrix_multiply(A22, B22, C22, mid)
        
        # Combine results into the resulting matrix C
        for i in range(mid):
            for j in range(mid):
                C[i][j] = C11[i][j]
                C[i][j + mid] = C12[i][j]
                C[i + mid][j] = C21[i][j]
                C[i + mid][j + mid] = C22[i][j]

# Example matrices
A = [[1, 2], [3, 4]]
B = [[5, 6], [7, 8]]
n = 2  # Size of the matrix

# Initialize result matrix C
C = [[0 for _ in range(n)] for _ in range(n)]

# Perform matrix multiplication
matrix_multiply(A, B, C, n)

# Output the resulting matrix
for row in C:
    print(row)




