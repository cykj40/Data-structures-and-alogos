export function push(element, array) {
    // Create a new array with the element added to the end
    return [...array, element];
}
console.log(push(4, [1, 2, 3]));

export function update(index, value, array) {
    // Create a new array with the value at the index updated

    // return array.map((item, i) => i === index ? value : item);


    const itemsBefore = array.slice(0, index);
    const itemsAfter = array.slice(index + 1);
    return [...itemsBefore, value, ...itemsAfter];

    //    return array
    //        .slice(0, index)
    //        .concat(value)
    //        .concat(array.slice(index + 1));
}
console.log(update(2, 9, [1, 2, 3, 6, 5]));

export function pop(array) {
    // Create a new array with the last element removed
    return array.slice(0, 2);
}
console.log(pop([1, 2, 3, 6, 7]));

export function concat(array1, array2) {
    // Create a new array with the elements of array1 and array2 concatenated
    return [...array1, ...array2];
}
console.log(concat([1, 2, 3], [4, 5, 6]));



