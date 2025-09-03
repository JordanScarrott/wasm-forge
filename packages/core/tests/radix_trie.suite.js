import { describe, it, expect } from 'vitest';

export function runRadixTrieTests({ RadixTrie, name }) {
  describe(`${name} RadixTrie`, () => {
    it('should insert and find a key-value pair', () => {
      const trie = new RadixTrie();
      trie.insert('key1', 'value1');
      expect(trie.find('key1')).toBe('value1');
    });

    it('should return null for non-existent keys', () => {
      const trie = new RadixTrie();
      trie.insert('key1', 'value1');
      expect(trie.find('key2')).toBe(null);
    });

    it('should handle inserting and finding multiple keys', () => {
      const trie = new RadixTrie();
      trie.insert('apple', 1);
      trie.insert('app', 2);
      trie.insert('apricot', 3);

      expect(trie.find('apple')).toBe(1);
      expect(trie.find('app')).toBe(2);
      expect(trie.find('apricot')).toBe(3);
    });

    it('should overwrite the value if the same key is inserted again', () => {
      const trie = new RadixTrie();
      trie.insert('key1', 'value1');
      trie.insert('key1', 'value2');
      expect(trie.find('key1')).toBe('value2');
    });

    it('should handle splitting nodes correctly', () => {
      const trie = new RadixTrie();
      trie.insert('tester', 'value1');
      trie.insert('test', 'value2');
      expect(trie.find('tester')).toBe('value1');
      expect(trie.find('test')).toBe('value2');
    });

    it('should find all keys with a given prefix', () => {
      const trie = new RadixTrie();
      trie.insert('apple', 1);
      trie.insert('app', 2);
      trie.insert('apricot', 3);
      trie.insert('banana', 4);

      const results = trie.find_all_with_prefix('ap');
      const keys = results.map(r => r.key).sort();
      const values = results.map(r => r.value).sort((a,b) => a-b);

      expect(keys).toEqual(['app', 'apple', 'apricot']);
      expect(values).toEqual([1, 2, 3]);
    });

    it('should return an empty array if no keys match the prefix', () => {
        const trie = new RadixTrie();
        trie.insert('apple', 1);
        expect(trie.find_all_with_prefix('b')).toEqual([]);
    });

    it('should handle empty string as a key', () => {
        const trie = new RadixTrie();
        trie.insert('', 'root');
        expect(trie.find('')).toBe('root');
    });

    it('should handle empty string as a prefix', () => {
        const trie = new RadixTrie();
        trie.insert('apple', 1);
        trie.insert('banana', 2);
        const results = trie.find_all_with_prefix('');
        const keys = results.map(r => r.key).sort();
        const values = results.map(r => r.value).sort((a,b) => a-b);
        expect(keys).toEqual(['apple', 'banana']);
        expect(values).toEqual([1,2]);
    });

    it('should delete a key', () => {
        const trie = new RadixTrie();
        trie.insert('apple', 1);
        trie.insert('app', 2);

        expect(trie.delete('apple')).toBe(true);
        expect(trie.find('apple')).toBe(null);
        expect(trie.find('app')).toBe(2);
    });

    it('should handle deleting a non-existent key', () => {
        const trie = new RadixTrie();
        trie.insert('apple', 1);
        expect(trie.delete('apples')).toBe(false);
    });

    it('should handle node merging upon deletion', () => {
        const trie = new RadixTrie();
        trie.insert('test', 1);
        trie.insert('tester', 2);

        trie.delete('tester');
        expect(trie.find('test')).toBe(1);
        expect(trie.find('tester')).toBe(null);

        // This is a bit tricky to test without inspecting the internal structure.
        // We are relying on the fact that if merging works, the find operation should still be correct.
    });

    it('should handle complex scenarios', () => {
        const trie = new RadixTrie();
        trie.insert('romane', 1);
        trie.insert('romanus', 2);
        trie.insert('romulus', 3);
        trie.insert('rubens', 4);
        trie.insert('ruber', 5);
        trie.insert('rubicon', 6);
        trie.insert('rubicundus', 7);

        expect(trie.find('romane')).toBe(1);
        expect(trie.find('romanus')).toBe(2);
        expect(trie.find('romulus')).toBe(3);
        expect(trie.find('rubens')).toBe(4);
        expect(trie.find('ruber')).toBe(5);
        expect(trie.find('rubicon')).toBe(6);
        expect(trie.find('rubicundus')).toBe(7);

        const results = trie.find_all_with_prefix('rubi');
        const keys = results.map(r => r.key).sort();
        expect(keys).toEqual(['rubicon', 'rubicundus']);

        trie.delete('romanus');
        expect(trie.find('romanus')).toBe(null);
        expect(trie.find('romane')).toBe(1);
    });
  });
}
