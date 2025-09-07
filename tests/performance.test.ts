import { describe, it, expect } from 'vitest';
import { Trie } from './crates/trie/pkg-test/trie.js';
import { mergeSort as jsMergeSort } from 'packages/core/src/implementations/js';
import { mergeSort as wasmMergeSort } from './crates/merge-sort/pkg-test/merge_sort.js';

describe('Trie Performance', () => {
  it('should run performance tests', () => {
    const WasmTrie = Trie;
    const words = Array.from({ length: 1000 }, (_, i) => `word${i}`);

    console.log('--- Trie Performance Test ---');

    // WasmTrie insert
    const wasmTrie = new WasmTrie();
    console.time('WasmTrie insert');
    for (const word of words) {
      wasmTrie.insert(word);
    }
    console.timeEnd('WasmTrie insert');

    // WasmTrie search
    console.time('WasmTrie search');
    for (const word of words) {
      wasmTrie.search(word);
    }
    console.timeEnd('WasmTrie search');

    console.log('---------------------------\n');
    expect(true).toBe(true);
  });
});


describe('Merge Sort Performance', () => {
    it('should run performance tests for merge sort', () => {
        const arr = Array.from({ length: 10000 }, () => Math.random() * 10000);

        console.log('--- Merge Sort Performance Test ---');

        // JS mergeSort
        console.time('JS mergeSort');
        jsMergeSort(arr);
        console.timeEnd('JS mergeSort');

        // Wasm mergeSort
        console.time('Wasm mergeSort');
        wasmMergeSort(arr);
        console.timeEnd('Wasm mergeSort');

        console.log('-----------------------------------\n');
        expect(true).toBe(true);
    });
});
