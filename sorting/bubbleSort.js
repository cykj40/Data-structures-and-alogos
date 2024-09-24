// Implement the bubble sort algorithm to sort an array of numbers in ascending order.


// Solution 1
function bubbleSort(arr) {
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([3, 27, 9, 10, 38, 15, 43, 3, 82, 10])); // [3, 3, 9, 10, 10, 15, 27, 38, 43, 82]

// Solution 2

var arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
var arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function bubbleSortBasic(array) {
    var countOuter = 0;
    var countInner = 0;
    var countSwap = 0;
    for (var i = 0; i < array.length; i++) {
        countOuter++;
        for (var j = 1; j < array.length; j++) {
            countInner++;
            if (array[j - 1] > array[j]) {
                countSwap++;
                swap(array, j - 1, j);
            }
        }
    }
    console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
    return array;
}

console.log(bubbleSortBasic(arrayRandom.slice())); // => outer: 10 inner: 90 swap: 25
console.log(bubbleSortBasic(arrayOrdered.slice())); // => outer: 10 inner: 90 swap: 0
console.log(bubbleSortBasic(arrayReversed.slice())); // => outer: 10 inner: 90 swap: 45
