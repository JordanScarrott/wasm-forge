# Contributing to Wasm-Forge

First off, thank you for considering contributing to Wasm-Forge! It's people like you that make open source such a great community.

## Introduction

Wasm-Forge is a project dedicated to providing high-performance, reliable WebAssembly modules for common data structures and algorithms. We aim to create a library that is not only fast but also easy to use and contribute to.

## The Core Philosophy: The "Testing Contract"

The single most important rule for contributing to this repository is the **Testing Contract**. Every WebAssembly module in this repository must be accompanied by a pure JavaScript implementation that serves as a reference.

The primary goal is to prove that the Wasm module is not only faster but also **behaves identically** to its JS counterpart. This ensures correctness and provides a clear benchmark for performance improvements.

## Contribution Workflow

To add a new module (e.g., a new algorithm) to Wasm-Forge, please follow these steps:

1.  **Propose**: Open an issue to discuss the new module you want to add. This helps us to make sure that the module is a good fit for the project and to avoid duplication of effort.
2.  **Implement the JS Version**: Write the pure JavaScript implementation of the algorithm first. This will serve as the reference implementation.
3.  **Create the Shared Test Suite**: Write a `.suite.js` (or `.suite.ts`) file that thoroughly tests the JS implementation. This suite defines the "contract" that the Wasm version must pass. The tests should be comprehensive and cover all edge cases.
4.  **Implement the Rust/Wasm Version**: Create the new Rust crate and implement the logic.
5.  **Validate**: Ensure that the new Wasm module passes the exact same shared test suite created in Step 3.
6.  **Benchmark**: Add a performance test that demonstrates the speed advantage of the Wasm version over the JS version.
7.  **Submit a PR**: Open a Pull Request for review. Make sure that all tests and benchmarks are passing.

## Code Style

To maintain a consistent code style, we use:

*   `rustfmt` for Rust code.
*   `Prettier` for JavaScript and TypeScript code.

Please make sure to format your code before submitting a PR. Most editors can be configured to do this automatically on save.
