function greet(greeting, name) {
    return `${greeting}, ${name}!`;
}

function greetCurried(greeting) {
    return function (name) {
        return `${greeting}, ${name}!`;
    }
}

const greetHello = greetCurried('Hello');
const greetHi = greetCurried('Hi');
const greetItal = greetCurried('Ciao');
const greetTexas = greetCurried('Howdy');

console.log(greetHello('Cyrus'));
console.log(greetHi('Cyrus'));
console.log(greetItal('Cyrus'));
console.log(greetTexas('Cyrus'));



