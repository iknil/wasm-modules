let wasm = require('./libs/quicksort');

module.exports = function quicksort(arr: number[], asc: boolean = true) {
    return wasm.quicksort(arr, asc);
}