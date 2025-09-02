import { getLevenshtein as getWasmLevenshtein, getTrie as getWasmTrie } from './implementations/wasm';

export const getLevenshtein = getWasmLevenshtein;
export const getTrie = getWasmTrie;
