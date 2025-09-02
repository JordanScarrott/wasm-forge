# WASM-Forge

**The pluggable-backend TypeScript library for performance-critical algorithms.**

WASM-Forge is a an open-source project dedicated to providing the fastest possible implementations for common algorithms by leveraging the power of WebAssembly, without sacrificing developer experience.

## Project Vision

In the modern web landscape, performance is paramount. While JavaScript and TypeScript are incredibly versatile, they can't always match the raw speed of lower-level languages like Rust, Zig, or C++. WebAssembly (WASM) bridges this gap, but integrating WASM modules into a JavaScript/TypeScript project can be a complex and error-prone process.

**WASM-Forge solves this problem.**

Our vision is to create the go-to TypeScript library for performance-critical algorithms. We provide a stable, ergonomic, and beautiful TypeScript API that developers love to use. Under the hood, that API is powered by highly-optimized WebAssembly modules. We abstract away the pain of JS-WASM integration, offering pure performance with a seamless developer experience.

## Core Principles

Our development philosophy is guided by three non-negotiable principles:

1.  **The API is Sacred**: The TypeScript interfaces we define are stable and predictable. Developers building on top of WASM-Forge can trust that our APIs are ergonomic, well-documented, and will not have breaking changes without a major version bump.
2.  **Performance is Law**: The core reason for this library's existence is speed. We are relentlessly committed to finding and deploying the fastest possible implementations for our algorithms.
3.  **Correctness is Non-Negotiable**: Speed is meaningless if the results are wrong. All implementations must pass a rigorous suite of tests to be considered for inclusion. There is no room for error.

## How it Works

WASM-Forge utilizes a "pluggable backend" architecture. This means that for any given algorithm (e.g., `levenshtein` distance), there can be multiple competing implementations written in different languages.

1.  **The Core API**: The `@wasm-forge/core` package provides the public TypeScript API. When a function like `levenshtein(a, b)` is called, the core library is responsible for loading the currently accepted high-performance WASM module.
2.  **Reference Implementations**: Implementations for algorithms are developed in separate packages within the `packages/reference-implementations` directory. These are self-contained projects (e.g., a Rust crate, a Zig project) that compile to a WASM module.
3.  **Competition**: We foster a competitive ecosystem. The community is encouraged to submit new implementations for existing algorithms. If a new implementation is demonstrably faster than the current one and passes all correctness tests, it becomes the new standard.
4.  **Seamless Integration**: The build process for the `core` library is configured to automatically find the winning implementation, bundle its WASM module, and make it available to the TypeScript layer. This means the end-user simply calls a TypeScript function, and the fastest possible logic is executed automatically.

This model allows us to continuously evolve and improve the performance of our library, leveraging the collective expertise of the open-source community to find the best possible solutions.

## Getting Started

To get started with developing WASM-Forge locally, you'll need to have [Rust](https://www.rust-lang.org/tools/install) and [pnpm](https://pnpm.io/installation) installed.

Once you have the prerequisites, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/WASM-Forge.git
cd WASM-Forge
pnpm install
```

### Building the WASM modules

Each reference implementation that is written in a language that compiles to WASM has its own build process. For example, to build the Rust `levenshtein` implementation, navigate to its package directory and run the build command:

```bash
cd packages/reference-implementations/levenshtein-rust
pnpm build
```

This will compile the Rust code into a WASM module and generate the necessary JavaScript bindings in the `pkg` directory.

### Running Tests and Benchmarks

After building the WASM modules, you can run the test suite and benchmarks from the root of the repository:

```bash
# Run all tests
pnpm test

# Run all benchmarks
pnpm bench
```

## Publishing

This repository is equipped with a GitHub Actions workflow to automate the publishing of packages to the npm registry.

Before you can publish for the first time, you must complete a one-time setup to provide the necessary credentials. Please follow the instructions in the [NPM_TODO.md](NPM_TODO.md) file.

Once the setup is complete, follow these steps to publish a new version of a package:

1.  **Update Version:** Manually update the `version` field in the `Cargo.toml` file of the package(s) you intend to release (e.g., `crates/trie/Cargo.toml`).
2.  **Navigate to Actions:** Go to the "Actions" tab in the GitHub repository.
3.  **Run Workflow:**
    *   Select the "Publish to npm" workflow from the list on the left.
    *   Click the "Run workflow" button.
    *   Confirm by clicking the green "Run workflow" button in the dropdown.

The workflow will then build the wasm packages and publish them to npm.

## Contributing

This project is in its early stages. We welcome contributors of all levels. Please see our [CONTRIBUTING.md](CONTRIBUTING.md) to get started.