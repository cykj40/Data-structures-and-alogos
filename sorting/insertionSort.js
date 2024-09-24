// an example of insertion sort

function insertionSort(arr) {
    // start from the second element
  for (let i = 1; i < arr.length; i++) {
    // store the current value
    let currentVal = arr[i];
    // compare the current value with the previous elements
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
        // if the current value is smaller than the previous element, move the previous element to the next position
      arr[j + 1] = arr[j];
    }
    // insert the current value to the correct position
    arr[j + 1] = currentVal;
  }
  // return the sorted array
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4])); // [1, 2, 4, 9, 76]

console.log(insertionSort([31, 41, 59, 26, 41, 58])); // [26, 31, 41, 41, 58, 59]

// write an insertion sort algorithm in monotonic decreasing order

function insertionSortDecreasing(arr) {
    // start from the second element
  for (let i = 1; i < arr.length; i++) {
    // store the current value
    let currentVal = arr[i];
    // compare the current value with the previous elements
    for (var j = i - 1; j >= 0 && arr[j] < currentVal; j--) {
        // if the current value is greater than the previous element, move the previous element to the next position
      arr[j + 1] = arr[j];
    }
    // insert the current value to the correct position
    arr[j + 1] = currentVal;
  }
  // return the sorted array
  return arr;
}

console.log(insertionSortDecreasing([2, 1, 9, 76, 4])); // [76, 9, 4, 2, 1]

console.log(insertionSortDecreasing([31, 41, 59, 26, 41, 58])); // [59, 58, 41, 41, 31, 26]

// Write a procedure ADD-Binary-Integers that takes two n-bit binary integers stored in two n-element arrays A and B. The procedure should return the sum of the two binary integers in the form of an (n+1)-element array C.   

function addBinaryIntegers(A, B) {
    let n = A.length;
    let C = new Array(n + 1).fill(0);
    let carry = 0;
    for (let i = n - 1; i >= 0; i--) {
        let sum = A[i] + B[i] + carry;
        if (sum === 0) {
            C[i + 1] = 0;
            carry = 0;
        } else if (sum === 1) {
            C[i + 1] = 1;
            carry = 0;
        } else if (sum === 2) {
            C[i + 1] = 0;
            carry = 1;
        } else if (sum === 3) {
            C[i + 1] = 1;
            carry = 1;
        }
    }
    C[0] = carry;
    return C;
}

console.log(addBinaryIntegers([1, 0, 1, 0], [1, 1, 1, 1])); // [1, 0, 0, 0, 1]

