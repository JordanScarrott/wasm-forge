# Local Development Guide

This guide provides detailed instructions for setting up and running the Wasm-Forge project locally. It is intended for developers who want to contribute to the project or run it on their own machines.

## Introduction

Wasm-Forge is a collection of high-performance data structures and algorithms written in Rust and compiled to WebAssembly (Wasm). These Wasm modules can be used in any Javascript/Typescript project, providing a significant performance boost for computationally intensive tasks. The project is structured as a monorepo, containing both the Rust source code for the Wasm modules and the Typescript packages that consume them.

## Dependencies

To build and run this project, you will need to have the following dependencies installed on your system.

### 1. Rust
Rust is used to write the WebAssembly modules. You can install Rust using `rustup`, the Rust toolchain installer.

- **Installation:** [https://www.rust-lang.org/tools/install](https://www.rust-lang.org/tools/install)

### 2. wasm-pack
`wasm-pack` is a tool for building and packaging Rust crates that target WebAssembly.

- **Installation:** [https://rustwasm.github.io/wasm-pack/installer/](https://rustwasm.github.io/wasm-pack/installer/)

### 3. Node.js
Node.js is required to run the Javascript/Typescript parts of the project.

- **Installation:** [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

### 4. pnpm
This project uses `pnpm` as its package manager.

- **Installation:** [https://pnpm.io/installation](https://pnpm.io/installation)

## Setup

Once you have installed all the dependencies, you can set up the project with the following steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/JordanScarrott/wasm-forge.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd wasm-forge
    ```

3.  **Install project dependencies:**
    This command will install all the dependencies for the Javascript/Typescript packages in the monorepo.
    ```bash
    pnpm install
    ```

## Building the Project

The Rust crates in this project need to be compiled into WebAssembly before they can be used by the Javascript packages.

### Building all packages

To build all the Wasm packages, run the following command from the root of the repository:

```bash
pnpm build
```

This command will build all the crates in the `crates/` directory and place the output in the corresponding `pkg/` directory within each crate's folder.

### Building a specific package

If you only want to build a single package, you can use the `--filter` flag. For example, to build the `levenshtein` package, run:

```bash
pnpm build --filter=@wasm-forge/levenshtein
```

## Running Tests

To ensure that everything is working correctly, you can run the test suite. The tests cover both the Rust crates and the Typescript packages.

To run all the tests, execute the following command from the root of the repository:

```bash
pnpm test
```

## Project Structure

This project is a monorepo, which means it contains multiple packages within a single repository. The structure is as follows:

```
.
├── crates/
│   ├── levenshtein/
│   └── trie/
├── packages/
│   └── core/
├── package.json
└── pnpm-workspace.yaml
```

-   **`crates/`**: This directory contains all the Rust crates that are compiled to WebAssembly. Each subdirectory is a separate crate with its own `Cargo.toml` file.

-   **`packages/`**: This directory contains the Typescript packages that consume the Wasm modules. The `core` package is the main package that provides a unified API for all the Wasm modules.

-   **`package.json`**: The root `package.json` file contains scripts and dependencies for the entire monorepo.

-   **`pnpm-workspace.yaml`**: This file defines the workspace for the `pnpm` package manager, allowing it to manage the packages in the monorepo.
