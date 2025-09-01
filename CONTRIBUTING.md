# Contributing to WASM-Forge

First off, thank you for considering contributing to WASM-Forge! It's people like you that make the open-source community such a fantastic place. We're excited to see what you'll bring to the project.

This is a community-driven project, and we welcome contributions of all kinds, from documentation improvements to new algorithm implementations.

## Our Philosophy

We are building a library that is, above all, **fast**, **correct**, and **easy to use**. Our core principles should guide all contributions:

-   **The API is Sacred**: We must maintain a stable and ergonomic public API.
-   **Performance is Law**: We strive for the best possible performance.
-   **Correctness is Non-Negotiable**: All code must be rigorously tested.

## How to Contribute

There are two main ways to contribute to the WASM-Forge codebase:

1.  **Submit a Competing Implementation** for an existing algorithm.
2.  **Add a New Algorithm** to the library.

### 1. Submitting a Competing Implementation

This is the core competitive aspect of WASM-Forge. If you believe you can write a faster version of an existing algorithm, we want to see it!

**The Process:**

1.  **Fork the Repository**: Start by forking the main `wasm-forge` repository to your own GitHub account.
2.  **Create a New Package**: Inside the `packages/reference-implementations/` directory, create a new package for your implementation. For example, if you are submitting a new Levenshtein implementation written in Zig, you might create `packages/reference-implementations/levenshtein-zig`.
3.  **Develop Your Implementation**: Write your code. Your project must compile to a `.wasm` module. Ensure it exports a function with the exact same signature as the one defined in `@wasm-forge/core`.
4.  **Submit a Pull Request**: Open a PR from your fork to the main repository. Your PR description should clearly state the language used and any notable aspects of your implementation.

**The Rules for Acceptance:**

For your implementation to be accepted and become the new standard, it must meet these strict criteria:

1.  **Pass All Tests**: Your implementation must pass *all* existing tests for that algorithm, which are located in the `packages/core/tests` directory. You can run the tests using `pnpm test`.
2.  **Demonstrate Performance Improvement**: Your implementation must be demonstrably faster than the current standard. Your PR must include an update to the benchmark file (`packages/core/tests/*.bench.ts`) that includes your new version. The new benchmark results must show a statistically significant performance improvement.
3.  **Update the CI Pipeline**: You must update the repository's GitHub Actions CI pipeline to add the necessary steps to build and test your module. This ensures that your implementation is continuously verified. You can find the CI configuration in the `.github/workflows` directory.

If your submission meets all these criteria, it will be merged, and your implementation will become the new official backend for that algorithm!

### 2. Adding a New Algorithm

If you have a new performance-critical algorithm that you think would be a great addition to WASM-Forge, we encourage you to propose it.

**The Process:**

1.  **Propose the API**: Before writing any implementation code, open an "Issue" on GitHub to propose the new algorithm and its TypeScript API. This allows the community to discuss the function signature, naming, and documentation.
2.  **Develop the Core Files**: Once the API is agreed upon, fork the repo and:
    *   Add the new function signature and JSDoc to `packages/core/src/index.ts`.
    *   Create a new test file (`packages/core/tests/your-algorithm.test.ts`) with a comprehensive suite of tests.
    *   Create a new benchmark file (`packages/core/tests/your-algorithm.bench.ts`).
3.  **Create a Reference Implementation**: Create an initial reference implementation for your algorithm in the `packages/reference-implementations` directory (e.g., `packages/reference-implementations/your-algorithm-rust`).
4.  **Submit a Pull Request**: Open a PR that includes all the above: the core API changes, tests, benchmarks, and the initial reference implementation.

## Code of Conduct

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

We are excited to build the future of high-performance web development with you!
