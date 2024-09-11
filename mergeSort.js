// merge(L, R) 
// [3,27] [9,10]
// initialize empty array
// compare the first index of the left array to the first index of the right array
// push the smaller value to the new array
// repeat until both arrays are empty


// mergeSort(list)
// base case: if list.length < 2, return 
// split the list into two halves L and R
// Lsorted = mergeSort(L)
// Rsorted = mergeSort(R)
// return merge(Lsorted, Rsorted)

// mergeSort([3, 27, 9, 10, 38, 15, 43, 3, 82, 10])

//solution 1


function merge(L, R) {
    let sorted = [];
    while (L.length && R.length) {
        if (L[0] < R[0]) {
        sorted.push(L.shift());
        } else {
        sorted.push(R.shift());
        }
    }
    return sorted.concat(L, R);
    }

function mergeSort(list) {
    if (list.length < 2) {
        return list;
    }
    let mid = Math.floor(list.length / 2);
    let L = list.slice(0, mid);
    let R = list.slice(mid);
    let Lsorted = mergeSort(L);
    let Rsorted = mergeSort(R);
    return merge(Lsorted, Rsorted);
}

console.log(mergeSort([3, 27, 9, 10, 38, 15, 43, 3, 82, 10])); // [3, 3, 9, 10, 10, 15, 27, 38, 43, 82]
console.log(mergeSort([3, 41, 52, 26, 38, 57, 9, 49])); // [3, 9, 26, 38, 41, 49, 52, 57]













