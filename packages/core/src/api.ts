import { getLevenshtein as getWasmLevenshtein, getTrie as getWasmTrie, getRadixSort as getWasmRadixSort } from './implementations/wasm';

export const getLevenshtein = getWasmLevenshtein;
export const getTrie = getWasmTrie;
export const getRadixSort = getWasmRadixSort;
