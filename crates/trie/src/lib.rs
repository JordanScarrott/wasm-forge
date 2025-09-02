use wasm_bindgen::prelude::*;
use std::collections::HashMap;

#[wasm_bindgen]
#[derive(Default)]
pub struct TrieNode {
    children: HashMap<char, TrieNode>,
    is_end_of_word: bool,
}

#[wasm_bindgen]
pub struct Trie {
    root: TrieNode,
}

#[wasm_bindgen]
impl Trie {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Trie {
        Trie {
            root: TrieNode::default(),
        }
    }

    pub fn insert(&mut self, word: &str) {
        let mut node = &mut self.root;
        for ch in word.chars() {
            node = node.children.entry(ch).or_insert_with(TrieNode::default);
        }
        node.is_end_of_word = true;
    }

    pub fn search(&self, word: &str) -> bool {
        let mut node = &self.root;
        for ch in word.chars() {
            if let Some(n) = node.children.get(&ch) {
                node = n;
            } else {
                return false;
            }
        }
        node.is_end_of_word
    }

    pub fn starts_with(&self, prefix: &str) -> bool {
        let mut node = &self.root;
        for ch in prefix.chars() {
            if let Some(n) = node.children.get(&ch) {
                node = n;
            } else {
                return false;
            }
        }
        true
    }
}
