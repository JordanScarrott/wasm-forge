# Radix Trie

A Radix Trie, also known as a Patricia Trie or compact prefix tree, is a space-optimized trie data structure that stores key-value pairs.

In a standard trie, each node represents a single character of a key. In a Radix Trie, nodes with only one child are merged with their parent, which can significantly reduce the memory footprint, especially for keys that share long common prefixes.

## Complexity

### Time Complexity

- **Insert**: `O(k)`
- **Find**: `O(k)`
- **Delete**: `O(k)`
- **Find All with Prefix**: `O(k + n)`, where `n` is the number of keys with the given prefix.

Where `k` is the length of the key.

### Space Complexity

- **Space**: `O(N * k)`, where `N` is the number of keys and `k` is the average key length. The space complexity is better than a standard trie in the worst case, but can be similar in the average case.

## Usage Examples

### JavaScript

```javascript
import { getRadixTrie } from '@wasm-forge/core';

const RadixTrie = await getRadixTrie();
const trie = new RadixTrie();

// Insert key-value pairs
trie.insert('apple', 1);
trie.insert('app', 2);

// Find a value by key
const value = trie.find('app'); // 2

// Find all keys with a prefix
const results = trie.find_all_with_prefix('ap');
// [{ key: 'app', value: 2 }, { key: 'apple', value: 1 }]

// Delete a key
trie.delete('app');
```

### Rust

```rust
use radix_trie::RadixTrie;
use wasm_bindgen::JsValue;

let mut trie = RadixTrie::new();

// Insert key-value pairs
trie.insert("apple".to_string(), JsValue::from_f64(1.0));
trie.insert("app".to_string(), JsValue::from_f64(2.0));

// Find a value by key
let value = trie.find("app".to_string());

// Delete a key
trie.delete("app".to_string());
```
