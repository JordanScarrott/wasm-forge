import { runTrieTests } from './trie.suite.js';
import { JSTrie } from '../src/implementations/js/trie.ts';

runTrieTests({
  Trie: JSTrie,
  name: 'JS',
});
