import { getTrie } from '../src/api';
import { describe, it, expect } from 'vitest';

describe('Wasm Trie', () => {
  it('should insert and search for words', async () => {
    const Trie = await getTrie();
    const trie = new Trie();
    trie.insert('hello');
    trie.insert('world');

    expect(trie.search('hello')).toBe(true);
    expect(trie.search('world')).toBe(true);
    expect(trie.search('hell')).toBe(false);
    expect(trie.search('worl')).toBe(false);
    expect(trie.search('helloo')).toBe(false);
    expect(trie.search('w')).toBe(false);
  });

  it('should check for prefixes', async () => {
    const Trie = await getTrie();
    const trie = new Trie();
    trie.insert('apple');
    trie.insert('app');

    expect(trie.starts_with('app')).toBe(true);
    expect(trie.starts_with('appl')).toBe(true);
    expect(trie.starts_with('a')).toBe(true);
    expect(trie.starts_with('b')).toBe(false);
  });
});
