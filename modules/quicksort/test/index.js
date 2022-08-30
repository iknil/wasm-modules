let wasm = require('../pkg/quicksort');

const arr = [];
const MAX = 1000 * 1000 * 100;
let i = MAX;

while(i > 0) {
    arr.push(Math.ceil(Math.random() * MAX));
    i-=1;
}

let startTime = Date.now();
arr.sort();
console.log('js sort:', Date.now() - startTime);

startTime = Date.now();
wasm.quicksort(arr, true);
console.log('wasm sort:', Date.now() - startTime);
