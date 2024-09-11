function binarySearch(list, item) {
    let min = 0;  // Initialize the minimum index to the start of the list
    let max = list.length - 1;  // Initialize the maximum index to the end of the list
    let guess;  // This will store the index of the middle element
 
    while (min <= max) {  // Continue searching as long as the range is valid
        guess = Math.floor((min + max) / 2);  // Find the middle index
 
        if (list[guess] === item) {  // If the middle element is the item, return the index
            return guess;
        } else if (list[guess] < item) {  // If the middle element is less than the item, search the right half
            min = guess + 1;
        } else {  // If the middle element is greater than the item, search the left half
            max = guess - 1;
        }
    }
 
    return -1;  // If the item is not found, return -1
 }
 
 // Example usage:
 const sortedList = [2, 6, 7, 20, 34, 50, 90, 103];
 const itemToFind = 50;
 
 const index = binarySearch(sortedList, itemToFind);
 
 if (index !== -1) {
     console.log(`Item found at index ${index}`);
 } else {
     console.log('Item not found');
 }
 

 