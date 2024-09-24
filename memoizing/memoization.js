function times10(n) {
    return n * 10;
}

console.log(times10(9)); // 90
console.log(times10(3)); // 30

const cache = {};


// use times10 function to create a new function that will log a cached result when it has already been calculated
function memoTimes10(n) {
    if (n in cache) {
        console.log('Fetching from cache', n);
        return cache[n];
    } else {
        console.log('Calculating result', n);
        let result = times10(n);
        cache[n] = result;
        return result;
    }
}

console.log(memoTimes10(9)); // Calculating result 9, 90
console.log(memoTimes10(3)); // Calculating result 3, 30
console.log(memoTimes10(9)); // Fetching from cache 9, 90
console.log(memoTimes10(3)); // Fetching from cache 3, 30