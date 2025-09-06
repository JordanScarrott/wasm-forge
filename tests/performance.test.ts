import { describe, it, expect } from 'vitest';
import { Trie } from './crates/trie/pkg-test/trie.js';

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
