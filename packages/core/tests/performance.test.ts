import { describe, it, expect } from 'vitest';
import { getTrie, getRadixSort } from '../src/api';
import { JSTrie } from '../src/implementations/js/trie';
import { radixSort as JSRadixSort } from '../src/implementations/js';

describe('Performance', () => {
    it('should run Trie performance tests', async () => {
        const WasmTrie = await getTrie();
        const words = Array.from({ length: 1000 }, (_, i) => `word${i}`);

        console.log('--- Trie Performance Test ---');

        // WasmTrie insert
        const wasmTrie = new WasmTrie();
        console.time('WasmTrie insert');
        for (const word of words) {
        wasmTrie.insert(word);
        }
        console.timeEnd('WasmTrie insert');

        // JSTrie insert
        const jsTrie = new JSTrie();
        console.time('JSTrie insert');
        for (const word of words) {
        jsTrie.insert(word);
        }
        console.timeEnd('JSTrie insert');

        console.log('\n');

        // WasmTrie search
        console.time('WasmTrie search');
        for (const word of words) {
        wasmTrie.search(word);
        }
        console.timeEnd('WasmTrie search');

        // JSTrie search
        console.time('JSTrie search');
        for (const word of words) {
        jsTrie.search(word);
        }
        console.timeEnd('JSTrie search');

        console.log('---------------------------\n');
        expect(true).toBe(true);
    });

    it('should run Radix Sort performance tests', async () => {
        const wasmRadixSort = await getRadixSort();
        const arr = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 200000) - 100000);

        console.log('--- Radix Sort Performance Test ---');

        // Wasm RadixSort
        console.time('Wasm RadixSort');
        wasmRadixSort(arr);
        console.timeEnd('Wasm RadixSort');

        // JS RadixSort
        console.time('JS RadixSort');
        JSRadixSort(arr);
        console.timeEnd('JS RadixSort');

        console.log('---------------------------------');
        expect(true).toBe(true);
    });
});
