import { runTrieTests } from './trie.suite.js';
import { getTrie } from '../src/api';
import { beforeAll, describe, it } from 'vitest';

describe('Wasm Trie', () => {
  let WasmTrie;

  beforeAll(async () => {
    WasmTrie = await getTrie();
  });

  it('should run wasm tests', () => {
    runTrieTests({
      Trie: WasmTrie,
      name: 'Wasm',
    });
  });
});
