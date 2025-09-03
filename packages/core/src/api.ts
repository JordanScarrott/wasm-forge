import { getLevenshtein as getWasmLevenshtein, getTrie as getWasmTrie, getRadixTrie as getWasmRadixTrie } from './implementations/wasm';

export const getLevenshtein = getWasmLevenshtein;
export const getTrie = getWasmTrie;
export const getRadixTrie = getWasmRadixTrie;
