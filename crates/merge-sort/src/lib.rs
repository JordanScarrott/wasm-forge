use wasm_bindgen::prelude::*;
use js_sys::Array;

#[wasm_bindgen(js_name = mergeSort)]
pub fn merge_sort(arr: &JsValue) -> Array {
    let mut vec: Vec<f64> = serde_wasm_bindgen::from_value(arr.clone()).unwrap();

    fn merge_sort_recursive(arr: &mut [f64]) {
        if arr.len() > 1 {
            let mid = arr.len() / 2;
            let (left, right) = arr.split_at_mut(mid);
            merge_sort_recursive(left);
            merge_sort_recursive(right);

            let mut merged = Vec::with_capacity(left.len() + right.len());
            let mut i = 0;
            let mut j = 0;

            while i < left.len() && j < right.len() {
                if left[i] <= right[j] {
                    merged.push(left[i]);
                    i += 1;
                } else {
                    merged.push(right[j]);
                    j += 1;
                }
            }

            merged.extend_from_slice(&left[i..]);
            merged.extend_from_slice(&right[j..]);

            arr.copy_from_slice(&merged);
        }
    }

    merge_sort_recursive(&mut vec);
    vec.into_iter().map(JsValue::from).collect()
}
