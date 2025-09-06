import { describe } from 'vitest';
import { Trie } from './crates/trie/pkg-test/trie.js';
import { runTrieTests } from './trie.suite.js';

describe('Wasm Trie', () => {
  runTrieTests({ Trie, name: 'Wasm' });
});
