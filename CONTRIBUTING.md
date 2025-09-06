# Contributing to Wasm-Forge

First off, thank you for considering contributing to Wasm-Forge! It's people like you that make open source such a great community.

## Introduction

Wasm-Forge is a project dedicated to providing high-performance, reliable WebAssembly modules for common data structures and algorithms. We aim to create a library that is not only fast but also easy to use and contribute to.

## Local Development Setup

To get started with developing Wasm-Forge locally, you'll need to have the following dependencies installed:

- **Rust**: Required for writing the WebAssembly modules. You can install it using `rustup`.
  - [Installation Guide](https://www.rust-lang.org/tools/install)
- **Node.js**: Required for the JavaScript/TypeScript parts of the project.
  - [Installation Guide](https://nodejs.org/en/download/)
- **pnpm**: This project uses `pnpm` as its package manager.
  - [Installation Guide](https://pnpm.io/installation)
- **wasm-bindgen-cli**: The tool for facilitating high-level interactions between Wasm and JavaScript.
  - [Installation Guide](https://rustwasm.github.io/wasm-bindgen/reference/cli.html)

Once the basic dependencies are installed, you need to add the wasm32 target for Rust:
```bash
rustup target add wasm32-unknown-unknown
```

After installing the prerequisites, clone the repository and install the project dependencies:
```bash
git clone https://github.com/JordanScarrott/wasm-forge.git
cd wasm-forge
pnpm install
```

## Building the Project

The build system is designed to produce two different targets: one for modern web browsers (bundler target) and another for the Node.js environment (for testing).

### Web Target (Production)
To build the package for use in web applications, run:
```bash
pnpm run build
```
This command compiles the Rust code to WebAssembly and generates the necessary JavaScript bindings for an ES-Module-aware environment. The output is placed in `packages/wasm-forge/pkg`.

### Node.js Target (Testing)
To build the package for testing in a Node.js environment, run:
```bash
pnpm run build:nodejs
```
This command produces CommonJS-compatible modules, which are necessary for the current test setup. The output is placed in the `crates/*/pkg-test` directories.

## Running Tests

The test suite is configured to automatically build the Node.js target before running the tests. To run the entire test suite, simply execute:
```bash
pnpm test
```
This ensures that you are always testing against the latest version of your code.

## The Core Philosophy: The "Testing Contract"

The single most important rule for contributing to this repository is the **Testing Contract**. Every WebAssembly module in this repository must be accompanied by a pure JavaScript implementation that serves as a reference.

The primary goal is to prove that the Wasm module is not only faster but also **behaves identically** to its JS counterpart. This ensures correctness and provides a clear benchmark for performance improvements.

## Contribution Workflow

To add a new module (e.g., a new algorithm) to Wasm-Forge, please follow these steps:

1.  **Propose**: Open an issue to discuss the new module you want to add. This helps us to make sure that the module is a good fit for the project and to avoid duplication of effort.
2.  **Implement the JS Version**: Write the pure JavaScript implementation of the algorithm first. This will serve as the reference implementation.
3.  **Create the Shared Test Suite**: Write a `.suite.js` (or `.suite.ts`) file that thoroughly tests the JS implementation. This suite defines the "contract" that the Wasm version must pass. The tests should be comprehensive and cover all edge cases.
4.  **Implement the Rust/Wasm Version**: Create the new Rust crate and implement the logic using `cargo` and `wasm-bindgen`.
5.  **Validate**: Ensure that the new Wasm module passes the exact same shared test suite created in Step 3 by running `pnpm test`.
6.  **Benchmark**: Add a performance test that demonstrates the speed advantage of the Wasm version over the JS version.
7.  **Submit a PR**: Open a Pull Request for review. Make sure that all tests and benchmarks are passing.

## Making a Change and Releasing

This project uses [Changesets](https://github.com/changesets/changesets) to manage releases. When you make a change that you believe should be included in a release, you need to add a changeset.

After you have committed your code, run the following command:
```bash
pnpm changeset
```
You will be prompted to select the packages that have been changed, the bump type (major, minor, or patch) for each package, and a summary of the change.

Follow the prompts to generate a new changeset file. This file should be committed along with your code changes. When you create a pull request, the changeset file will be used to automatically update the package versions and changelogs.

## Code Style

To maintain a consistent code style, we use:

*   `rustfmt` for Rust code.
*   `Prettier` for JavaScript and TypeScript code.

Please make sure to format your code before submitting a PR. Most editors can be configured to do this automatically on save.
