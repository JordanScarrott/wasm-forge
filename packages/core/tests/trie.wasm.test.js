import { describe } from 'vitest';
import { Trie } from '@wasm-forge/trie';
import { runTrieTests } from './trie.suite.js';

describe('Wasm Trie', () => {
  runTrieTests({ Trie, name: 'Wasm' });
});
