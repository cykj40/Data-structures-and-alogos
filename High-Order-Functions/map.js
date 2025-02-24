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
