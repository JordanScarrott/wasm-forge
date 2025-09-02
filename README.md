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

## Releasing a New Version

This repository uses a tag-driven release process to automate publishing to npm and creating GitHub Releases.

### Prerequisites

Before you can create a new release, you must complete the one-time npm credential setup. Please follow the instructions in [NPM_TODO.md](NPM_TODO.md) to configure the `NPM_TOKEN` repository secret.

### Release Process

1.  **Update Version Numbers:**
    Update the `version` field in the `Cargo.toml` file for each package you intend to release.

2.  **Commit the Version Bump:**
    Commit the changes with a conventional commit message.
    ```bash
    # Example commit message
    git commit -m "chore(release): prepare for v1.2.3"
    ```

3.  **Tag the Release:**
    Create a Git tag that matches the new version number and push it to the remote repository.

    ```bash
    # Create a tag that matches the new version number
    git tag v1.2.3

    # Push the tag to the remote repository on GitHub
    git push origin v1.2.3
    ```

### Automation

Pushing a tag prefixed with `v` (e.g., `v1.2.3`) will automatically trigger two workflows:
*   **Publish to npm**: This workflow builds the wasm packages and publishes them to the npm registry.
*   **Create GitHub Release**: This workflow generates a new GitHub Release with a changelog based on the commits since the last tag.

## Contributing

We welcome contributors of all levels. Please see our [CONTRIBUTING.md](CONTRIBUTING.md) to get started.
