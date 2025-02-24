export function filter(predicateFn, array) {
    if (length(array) === 0) return [];
    const firstItem = head(array);
    const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];
    return concat(filteredFirst, filter(predicateFn, tail(array)));
}

export function map(fn, array) {
    // Base case: empty array
    if (length(array) === 0) return [];
    // Recursive case: map the first item and recurse on the rest of the array
    return concat([fn(head(array))], map(fn, tail(array)));
}

export function reduce(reducerFn, initialValue, array) {
    if (length(array) === 0) return initialValue;
    const newInitialValue = reducerFn(initialValue, head(array));
    return reduce(reducerFn, newInitialValue, tail(array));
}

export function sum(array) {
    return reduce(
        (acc, curr) => acc + curr,
        0,
        array
    )
}

export function max(array) {
    return reduce(
        (acc, curr) => val > acc ? curr : acc,
        -Infinity,
        array
    )
}

export function min(array) {
    return reduce(
        (acc, curr) => val < acc ? curr : acc,
        Infinity,
        array
    )
}

// Array helpers

// The functions below let us work with JavaScript arrays using a more functional API (e.g. length(array)), instead of the usual object-oriented method-calling API (e.g. array.length).

// Concatenate two arrays into a new single array

function concat(array1, array2) {
    return array1.concat(array2);
}

// Return the number of items in an array
function length(array) {
    return array.length;
}

// Return the first item in an array
export function head(array) {
    return array[0];
}

// Return the rest of an array after the first item
export function tail(array) {
    return array.slice(1);
}
