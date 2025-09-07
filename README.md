# Wasm-Forge

A collection of high-performance data structures and algorithms compiled to WebAssembly, with a focus on correctness and ease of use.

## Usage

To use wasm-forge, install it from npm:

```bash
pnpm install wasm-forge
```

Then, you can use it in your project:

```javascript
import { Trie } from 'wasm-forge';

const trie = new Trie();
trie.insert('hello');
trie.insert('world');
console.log(trie.search('hello')); // true
console.log(trie.search('world')); // true
```

## Development

For instructions on how to set up the local development environment and contribute to wasm-forge, please see our [CONTRIBUTING.md](CONTRIBUTING.md) guide.


## Contributing

We welcome contributors of all levels. Please see our [CONTRIBUTING.md](CONTRIBUTING.md) to get started.
