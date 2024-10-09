extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn wasm_fibo(n: usize) -> usize {
    if n <= 1 {
        return n;
    } else {
        return wasm_fibo(n - 1) + wasm_fibo(n - 2);
    }
}
