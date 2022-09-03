let wasm = require('../pkg/quicksort');

const arr = [];
const MAX = 1000 * 1000 * 100;
let i = MAX;

while(i > 0) {
    arr.push(Math.ceil(Math.random() * MAX));
    i-=1;
}

test('js sort', () => {
    arr.sort();
    expect(true).toBe(true);
});

test('wasm sort', () => {
    wasm.quicksort(arr, true);
    expect(true).toBe(true);
});
