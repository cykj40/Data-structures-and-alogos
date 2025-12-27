function sortedSquares(nums: number[]): number[] {
    const n = nums.length;
    const result = new Array(n);
    let left = 0;
    let right = n - 1;


    for (let i = n - 1; i >= 0; i--) {
        const leftSquare = nums[left] * nums[left];
        const rightSquare = nums[right] * nums[right];
        if (leftSquare > rightSquare) {
            result[i] = leftSquare;
            left++;
        } else {
            result[i] = rightSquare;
            right--;
        }
    }
    return result;
}


console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));