function joinElements(array, joinString) {
  function recurse(index, resultSoFar) {
    resultSoFar += array[index];

    if (index === array.length - 1) {
      return resultSoFar;
    } else {
      return recurse(index + 1, resultSoFar + joinString);
    }
  }

  return recurse(0, '');
}

console.log(joinElements(['s', 'cr', 't cod', ' :) :)'],"e")); // returnsnode
console.log(joinElements(['k','n','n','y' ],'e')) // returns ken


// redo above example iteratively

function joinElements(array, joinString) {
    let result = '';
    for (let i = 0; i < array.length; i++) {
        result += array[i];
        if (i !== array.length - 1) {
        result += joinString;
        }
    }
    return result;
    }

console.log(joinElements(['s', 'cr', 't cod', ' :) :)'],"e")); // returnsnode