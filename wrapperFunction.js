function wrapperFnLoop(start, end){
    function recurse(i) {
        console.log(`looping from ${start} to ${end}`);

        if (i < end) {
            recurse(i + 1);
        }
    }
    recurse(start);
}

function memoForLoop(i, end) {
    console.log(`looping from ${i} to ${end}`);

    if (i < end) {
        memoForLoop(i + 1, end);
    }
}

wrapperFnLoop(1, 5);
memoForLoop(1, 5);