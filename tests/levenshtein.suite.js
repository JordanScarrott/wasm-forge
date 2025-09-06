import { describe, it, expect } from 'vitest';

export function runLevenshteinTests({ levenshtein, name }) {
  describe(`${name} Levenshtein`, () => {
    it('should calculate the correct Levenshtein distance for identical strings', () => {
      expect(levenshtein('hello', 'hello')).toBe(0);
    });

    it('should calculate the correct Levenshtein distance for completely different strings', () => {
      expect(levenshtein('abc', 'xyz')).toBe(3);
    });

    it('should calculate the correct Levenshtein distance with insertions', () => {
      expect(levenshtein('cat', 'cats')).toBe(1);
    });

    it('should calculate the correct Levenshtein distance with deletions', () => {
      expect(levenshtein('apple', 'apple')).toBe(0);
    });

    it('should calculate the correct Levenshtein distance with substitutions', () => {
      expect(levenshtein('book', 'cook')).toBe(1);
    });

    it('should handle empty strings correctly', () => {
      expect(levenshtein('', 'abc')).toBe(3);
      expect(levenshtein('abc', '')).toBe(3);
      expect(levenshtein('', '')).toBe(0);
    });

    it('should handle strings of different lengths', () => {
      expect(levenshtein('sitting', 'kitten')).toBe(3);
      expect(levenshtein('flaw', 'lawn')).toBe(2);
    });
  });
}
