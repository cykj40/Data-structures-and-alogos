const memoize = (cb) => {
    let cache = {};
    return (n) => {
        if (n in cache) {
            console.log('Fetching from cache');
            return cache[n];
        } else {
            console.log('Calculating result');
            let result = cb(n);
            cache[n] = result;
            return result;
        }
    };
}

const memoClosureTimes10 = memoize((n) => n * 10);

 // 90
try {
    console.log(memoClosureTimes10(9));
    console.log(memoClosureTimes10(9));
     // 90
} catch (e) {
    console.error(e);
}