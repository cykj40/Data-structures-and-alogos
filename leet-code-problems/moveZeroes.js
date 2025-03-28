var moveZeroes = function (nums) {
    // i will track the position where the next non-zero number should go.
    // j is the pointer that scans through the array.

    let i = 0;
    let j = 0;


    // This loop runs as long as j hasn't reached the end of the array.
    while (j < nums.length) {
        // If the current number is not zero, we move it to the position i.
        if (nums[j] !== 0) {
            // Move the non-zero number to the position i.
            nums[i] = nums[j];
            // Move the pointer i to the next position.
            i++;
        }
        // Move the pointer j to the next element.
        j++;
    }

    // This loop runs as long as i hasn't reached the end of the array.
    for (let k = i; k < nums.length; k++) {
        // Fill the rest of the array with zeros.
        nums[k] = 0;
    }

    // Return the modified array.
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));




