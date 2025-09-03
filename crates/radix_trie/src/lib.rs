use wasm_bindgen::prelude::*;
use std::collections::HashMap;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub struct RadixTrieNode {
    children: HashMap<String, RadixTrieNode>,
    value: JsValue,
    is_end_of_word: bool,
}

#[wasm_bindgen]
impl RadixTrieNode {
    pub fn new() -> RadixTrieNode {
        RadixTrieNode {
            children: HashMap::new(),
            value: JsValue::NULL,
            is_end_of_word: false,
        }
    }
}

#[wasm_bindgen]
pub struct RadixTrie {
    root: RadixTrieNode,
}

#[wasm_bindgen]
impl RadixTrie {
    #[wasm_bindgen(constructor)]
    pub fn new() -> RadixTrie {
        RadixTrie {
            root: RadixTrieNode::new(),
        }
    }

    pub fn insert(&mut self, key: String, value: JsValue) {
        let mut node = &mut self.root;
        let mut search = key.as_str();

        while !search.is_empty() {
            let mut found = false;
            let mut best_match_edge = String::new();

            for (edge, _) in node.children.iter() {
                if !edge.is_empty() && search.starts_with(edge) {
                    best_match_edge = edge.clone();
                    break;
                }
                let common_prefix_len = search.chars().zip(edge.chars()).take_while(|(a, b)| a == b).count();
                if common_prefix_len > 0 && common_prefix_len > best_match_edge.len() {
                    best_match_edge = edge.chars().take(common_prefix_len).collect();
                }
            }

            if !best_match_edge.is_empty() {
                let edge = best_match_edge;
                if search.starts_with(&edge) {
                    let child_node = node.children.get_mut(&edge).unwrap();
                    node = child_node;
                    search = &search[edge.len()..];
                    found = true;
                } else {
                    // Split
                    let child_node = node.children.remove(&edge).unwrap();
                    let common_prefix = edge.chars().take(search.len()).collect::<String>();
                    let edge_suffix = edge.chars().skip(search.len()).collect::<String>();
                    let search_suffix = search.chars().skip(edge.len()).collect::<String>();

                    let mut new_node = RadixTrieNode::new();
                    new_node.children.insert(edge_suffix, child_node);
                    node.children.insert(common_prefix.clone(), new_node);

                    if search_suffix.is_empty() {
                        node = node.children.get_mut(&common_prefix).unwrap();
                        node.is_end_of_word = true;
                        node.value = value;
                    } else {
                        let mut new_child = RadixTrieNode::new();
                        new_child.is_end_of_word = true;
                        new_child.value = value;
                        let parent_node = node.children.get_mut(&common_prefix).unwrap();
                        parent_node.children.insert(search_suffix, new_child);
                    }
                    return;
                }
            }

            if !found {
                let mut new_node = RadixTrieNode::new();
                new_node.is_end_of_word = true;
                new_node.value = value;
                node.children.insert(search.to_string(), new_node);
                return;
            }
        }
        node.is_end_of_word = true;
        node.value = value;
    }

    pub fn find(&self, key: String) -> JsValue {
        let mut node = &self.root;
        let mut search = key.as_str();

        while !search.is_empty() {
            let mut found = false;
            for (edge, child_node) in &node.children {
                if search.starts_with(edge) {
                    node = child_node;
                    search = &search[edge.len()..];
                    found = true;
                    break;
                }
            }
            if !found {
                return JsValue::NULL;
            }
        }

        if node.is_end_of_word {
            node.value.clone()
        } else {
            JsValue::NULL
        }
    }

    pub fn delete(&mut self, key: String) -> bool {
        let (deleted, _) = delete_recursively(&mut self.root, &key);
        deleted
    }

    #[wasm_bindgen(js_name = findAllWithPrefix)]
    pub fn find_all_with_prefix(&self, prefix: String) -> js_sys::Array {
        let mut node = &self.root;
        let mut search = prefix.as_str();
        let results = js_sys::Array::new();

        while !search.is_empty() {
            let mut found = false;
            for (edge, child_node) in &node.children {
                if search.starts_with(edge) {
                    node = child_node;
                    search = &search[edge.len()..];
                    found = true;
                    break;
                } else if edge.starts_with(search) {
                    collect_recursively(child_node, prefix.clone() + &edge[search.len()..], &results);
                    return results;
                }
            }
            if !found {
                return results;
            }
        }

        collect_recursively(node, prefix, &results);
        results
    }
}

fn delete_recursively(node: &mut RadixTrieNode, search: &str) -> (bool, bool) { // (deleted, should_merge)
    if search.is_empty() {
        if !node.is_end_of_word {
            return (false, false);
        }
        node.is_end_of_word = false;
        node.value = JsValue::NULL;
        return (true, node.children.is_empty());
    }

    let mut to_remove: Option<String> = None;
    let mut to_merge: Option<(String, String, RadixTrieNode)> = None;
    let mut deleted = false;

    for (edge, child_node) in node.children.iter_mut() {
        if search.starts_with(edge) {
            let (child_deleted, should_merge) = delete_recursively(child_node, &search[edge.len()..]);
            if child_deleted {
                deleted = true;
                if should_merge {
                    if child_node.children.is_empty() {
                         to_remove = Some(edge.clone());
                    } else if child_node.children.len() == 1 {
                         let (child_edge, grand_child_node) = child_node.children.drain().next().unwrap();
                         to_merge = Some((edge.clone(), child_edge, grand_child_node));
                    }
                }
            }
            break;
        }
    }

    if let Some(edge) = to_remove {
        node.children.remove(&edge);
    }
    if let Some((edge, child_edge, grand_child_node)) = to_merge {
        node.children.remove(&edge);
        node.children.insert(edge + &child_edge, grand_child_node);
    }

    (deleted, deleted && node.children.is_empty() && !node.is_end_of_word)
}

fn collect_recursively(node: &RadixTrieNode, prefix: String, results: &js_sys::Array) {
    if node.is_end_of_word {
        let obj = js_sys::Object::new();
        js_sys::Reflect::set(&obj, &JsValue::from_str("key"), &JsValue::from_str(&prefix)).unwrap();
        js_sys::Reflect::set(&obj, &JsValue::from_str("value"), &node.value).unwrap();
        results.push(&obj);
    }
    for (edge, child_node) in &node.children {
        collect_recursively(child_node, prefix.clone() + edge, results);
    }
}
