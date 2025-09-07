import { getLevenshtein as getWasmLevenshtein, getTrie as getWasmTrie, getMergeSort as getWasmMergeSort } from './implementations/wasm';

export const getLevenshtein = getWasmLevenshtein;
export const getTrie = getWasmTrie;
export const getMergeSort = getWasmMergeSort;
