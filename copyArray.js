const copyArrayAndManipulate = (array, instructions) => {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(instructions(array[i]));
    }
    return output;
};

const multiplyBy2 = (input) => input * 2;

const result = console.log(copyArrayAndManipulate([1, 2, 3], multiplyBy2));