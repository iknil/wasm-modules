let quicksort = require('../dist');

const arr = [];
const MAX = 1000 * 1000 * 10;
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
    quicksort(arr, true);
    expect(true).toBe(true);
});
