use wasm_bindgen::prelude::*;
use std::cmp::min;

#[wasm_bindgen]
pub fn levenshtein(a: &str, b: &str) -> usize {
    let m = a.chars().count();
    let n = b.chars().count();

    if m == 0 {
        return n;
    }
    if n == 0 {
        return m;
    }

    let mut dp = vec![0; n + 1];

    for i in 0..=n {
        dp[i] = i;
    }

    for (i, char_a) in a.chars().enumerate() {
        let mut prev = dp[0];
        dp[0] = i + 1;
        for (j, char_b) in b.chars().enumerate() {
            let temp = dp[j + 1];
            let cost = if char_a == char_b { 0 } else { 1 };
            dp[j + 1] = min(
                dp[j] + 1,      // Deletion
                min(
                    dp[j + 1] + 1, // Insertion
                    prev + cost,    // Substitution
                ),
            );
            prev = temp;
        }
    }

    dp[n]
}
