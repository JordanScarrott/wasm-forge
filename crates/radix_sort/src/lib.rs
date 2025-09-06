use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn radix_sort(arr: &[i32]) -> Vec<i32> {
    if arr.is_empty() {
        return vec![];
    }

    let negatives: Vec<i32> = arr.iter().filter(|&&x| x < 0).copied().collect();
    let mut positives: Vec<i32> = arr.iter().filter(|&&x| x >= 0).copied().collect();

    let sorted_positives = radix_sort_helper(&mut positives);

    let mut abs_negatives: Vec<i32> = negatives.iter().map(|&x| x.abs()).collect();
    let sorted_abs_negatives = radix_sort_helper(&mut abs_negatives);

    let mut sorted_negatives: Vec<i32> = sorted_abs_negatives.into_iter().map(|x| -x).collect();
    sorted_negatives.reverse();

    [sorted_negatives, sorted_positives].concat()
}

fn radix_sort_helper(arr: &mut Vec<i32>) -> Vec<i32> {
    if arr.is_empty() {
        return vec![];
    }

    let max_val = match arr.iter().max() {
        Some(&max) => max,
        None => return arr.clone(),
    };

    let mut exp = 1;

    while max_val / exp > 0 {
        let mut count = [0; 10];
        let mut output = vec![0; arr.len()];

        for &num in arr.iter() {
            count[((num / exp) % 10) as usize] += 1;
        }

        for i in 1..10 {
            count[i] += count[i - 1];
        }

        for &num in arr.iter().rev() {
            let index = ((num / exp) % 10) as usize;
            output[count[index] - 1] = num;
            count[index] -= 1;
        }

        for i in 0..arr.len() {
            arr[i] = output[i];
        }

        exp *= 10;
    }

    arr.clone()
}
