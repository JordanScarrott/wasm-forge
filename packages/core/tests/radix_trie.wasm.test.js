import { runRadixTrieTests } from './radix_trie.suite';
import { getRadixTrie } from '../src/api';
import { beforeAll, describe, it } from 'vitest';

describe('Wasm RadixTrie', () => {
  let WasmRadixTrie;

  beforeAll(async () => {
    WasmRadixTrie = await getRadixTrie();
  });

  it('should run wasm tests', () => {
    runRadixTrieTests({
      RadixTrie: WasmRadixTrie,
      name: 'Wasm',
    });
  });
});
