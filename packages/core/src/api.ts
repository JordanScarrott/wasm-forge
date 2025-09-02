/**
 * Calculates the Levenshtein distance (edit distance) between two strings.
 * This function is powered by a WebAssembly module for maximum performance.
 * @param a The first string.
 * @param b The second string.
 * @returns A number representing the minimum number of single-character edits
 * (insertions, deletions, or substitutions) required to change string a into string b.
 */
import { levenshtein as wasmLevenshtein, Trie as WasmTrie } from './implementations/wasm';

// By default, a public API exposes the WASM-powered implementation.
export const levenshtein = wasmLevenshtein;
export const Trie = WasmTrie;
