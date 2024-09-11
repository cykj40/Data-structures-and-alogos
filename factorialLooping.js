function factorialLooping(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    console.log(`result = ${result} * ${i} = ${result * i}`);
    result *= i;
  }
  return result;
}
factorialLooping(5);

function logNumbers(start, end) {
  console.log(`iteratively looping from ${start} to ${end}`);

  for (let i = start; i <= end; i++) {
    console.log('hitting index', i);
  }
}
logNumbers(1, 5);

function logNumbersRecursively(start, end) {

  console.log(`recursively looping from ${start} to ${end}`);
  function recurse(i) {
    console.log('hitting index', i);

    if (i < end) {
      recurse(i + 1);
    }
  }

  recurse(start);
}

logNumbersRecursively(1, 5);