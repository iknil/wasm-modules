extern crate wasm_bindgen;
extern crate js_sys;

use wasm_bindgen::prelude::*;
use js_sys::Uint32Array;
use js_sys::Array;

#[wasm_bindgen]
extern "C" {
    // Use `js_namespace` here to bind `console.log(..)` instead of just
    // `log(..)`
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);

    // The `console.log` is quite polymorphic, so we can bind it with multiple
    // signatures. Note that we need to use `js_name` to ensure we always call
    // `log` in JS.
    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_u32(a: u32);

    // Multiple arguments too!
    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_many(a: &str, b: &str);
}

#[wasm_bindgen]
pub fn quicksort(array: JsValue, f: bool) -> Array {
    let mut arr: Vec<u32> = Uint32Array::new(&array).to_vec(); // JS array to Vec
    if f { arr.sort_unstable_by(|a, b| a.cmp(b)) } else { arr.sort_unstable_by(|a, b| b.cmp(a)) };
    arr.into_iter().map(JsValue::from).collect() // Vec to JS array
}