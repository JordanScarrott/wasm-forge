# Wasm-Forge

A collection of high-performance data structures and algorithms compiled to WebAssembly, with a focus on correctness and ease of use.

## Project Structure

This is a monorepo that contains a collection of WebAssembly modules. The `crates/` directory holds the individual Rust packages, which are published to npm as scoped packages (e.g., `@wasm-forge/levenshtein`).

## Available Packages

| Package                   | Description                               | NPM Package Name          |
| ------------------------- | ----------------------------------------- | ------------------------- |
| `@wasm-forge/levenshtein` | Levenshtein distance algorithm            | `@wasm-forge/levenshtein` |
| `@wasm-forge/trie`        | Trie data structure                       | `@wasm-forge/trie`        |

## Usage

To use a package, install it from npm:

```bash
pnpm install @wasm-forge/trie
```

Then, you can use it in your project:

```javascript
import { getTrie } from '@wasm-forge/trie';

async function main() {
  const Trie = await getTrie();
  const trie = new Trie();
  trie.insert('hello');
  console.log(trie.search('hello')); // true
}

main();
```

## Development

To get started with developing Wasm-Forge locally, you'll need to have [Rust](https://www.rust-lang.org/tools/install) and [pnpm](https://pnpm.io/installation) installed.

Once you have the prerequisites, clone the repository and install the dependencies:

```bash
git clone https://github.com/JordanScarrott/wasm-forge.git
cd wasm-forge
pnpm install
```

### Building a Wasm package

To build a specific Wasm package, run the following command:

```bash
pnpm -r build --filter=@wasm-forge/MODULE_NAME
```
Replace `MODULE_NAME` with the name of the crate you want to build (e.g., `levenshtein`).

### Running Tests

To run the entire test suite for all packages, run the following command from the root of the repository:

```bash
npm test
```

## Contributing

We welcome contributors of all levels. Please see our [CONTRIBUTING.md](CONTRIBUTING.md) to get started.
