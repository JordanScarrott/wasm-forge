import { describe, it, expect } from 'vitest';
import { Trie as WasmTrie } from '../src/api';
import { JSTrie } from '../src/implementations/js/trie';

describe('Trie Performance', () => {
  it('should run performance tests', () => {
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
});
