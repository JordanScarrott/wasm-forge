# Wasm-Forge

A collection of high-performance data structures and algorithms compiled to WebAssembly, with a focus on correctness and ease of use.

## Usage

To use wasm-forge, install it from npm:

```bash
pnpm install wasm-forge
```

Then, you can use it in your project:

```javascript
import { Trie, levenshtein } from 'wasm-forge';

const trie = new Trie();
trie.insert('hello');
console.log(trie.search('hello')); // true

const distance = levenshtein('hello', 'world');
console.log(distance); // 4
```

## Development

For instructions on how to set up the local development environment and contribute to wasm-forge, please see our [CONTRIBUTING.md](CONTRIBUTING.md) guide.

## Releasing a New Version

This repository uses a tag-driven release process to automate publishing to npm and creating GitHub Releases.

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

### Automation and Triggering

Pushing any tag that **starts with `v`** (e.g., `v1.2.3`, `v1.2.4-alpha`) will automatically trigger two workflows:
*   **Publish to npm**: This workflow builds the wasm packages and publishes them to the npm registry.
*   **Create GitHub Release**: This workflow generates a new GitHub Release with a changelog based on the commits since the last tag.

The automation is based on the tag's naming pattern (`v*`) and does not differentiate between patch, minor, or major version changes. The responsibility to tag at the appropriate time rests with the developer.

## Contributing

We welcome contributors of all levels. Please see our [CONTRIBUTING.md](CONTRIBUTING.md) to get started.
