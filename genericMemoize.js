const times10 = n => n * 10;


const memoize = (cb) => {
    const cache = {};
    return (n) => {
        if (n in cache) {
        console.log('Fetching from cache:', n);
        return cache[n];
        } else {
        console.log('Calculating result');
        const result = cb(n);
        cache[n] = result;
        return result;
        }
    }
    };

const memoizedTimes10 = memoize(times10);
console.log('~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~');
try {
    console.log('Task 1 calculated value:', memoizedTimes10(9)); // calculated
    console.log('Task 1 cached value:', memoizedTimes10(9)); // cached
} catch(e) {
    console.error('Task 1:', e);
}

