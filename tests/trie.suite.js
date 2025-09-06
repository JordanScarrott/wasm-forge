import { describe, it, expect } from 'vitest';

export function runTrieTests({ Trie, name }) {
  describe(`${name} Trie`, () => {
    it('should insert and search for words', () => {
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

    it('should check for prefixes', () => {
      const trie = new Trie();
      trie.insert('apple');
      trie.insert('app');

      expect(trie.startsWith('app')).toBe(true);
      expect(trie.startsWith('appl')).toBe(true);
      expect(trie.startsWith('a')).toBe(true);
      expect(trie.startsWith('b')).toBe(false);
    });
  });
}
