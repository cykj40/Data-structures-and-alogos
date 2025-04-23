function isEmpty(obj) {
    if (Array.isArray(obj)) {
        return obj.length === 0;
    }

    if (obj !== null && typeof obj === "object") {
        return Object.keys(obj).length === 0;
    }

    // fallback in case something unexpected slips through
    return true;
}

console.log(isEmpty([]));
console.log(isEmpty({}));
console.log(isEmpty(null));
console.log(isEmpty(undefined));
