function countRecos(node) {
    if (node === null) {
        return 0;
    }
    if (!node.yes && !node.no) {
        return 1;
    }
    return countRecos(node.yes) + countRecos(node.no);


}

console.log(countRecos({
    yes: {
        yes: null,
        no: null
    },
    no: {
        yes: {
            yes: null,
            no: null
        },
        no: {
            yes: null,
            no: null
        }
    }
})); // 5



module.exports = countRecos;

