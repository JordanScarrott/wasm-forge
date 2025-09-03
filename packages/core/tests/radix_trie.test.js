import { runRadixTrieTests } from './radix_trie.suite';
import { JSRadixTrie } from '../src/implementations/js/radix_trie';

runRadixTrieTests({ RadixTrie: JSRadixTrie, name: 'JS' });
