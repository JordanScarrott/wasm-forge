import { getLevenshtein } from '../src/api';
import { describe, it, expect } from 'vitest';

describe('levenshtein', () => {
  it('should calculate the correct Levenshtein distance for identical strings', async () => {
    const levenshtein = await getLevenshtein();
    expect(levenshtein('hello', 'hello')).toBe(0);
  });

  it('should calculate the correct Levenshtein distance for completely different strings', async () => {
    const levenshtein = await getLevenshtein();
    expect(levenshtein('abc', 'xyz')).toBe(3);
  });

  it('should calculate the correct Levenshtein distance with insertions', async () => {
    const levenshtein = await getLevenshtein();
    expect(levenshtein('cat', 'cats')).toBe(1);
  });

  it('should calculate the correct Levenshtein distance with deletions', async () => {
    const levenshtein = await getLevenshtein();
    expect(levenshtein('apple', 'apple')).toBe(0);
  });

  it('should calculate the correct Levenshtein distance with substitutions', async () => {
    const levenshtein = await getLevenshtein();
    expect(levenshtein('book', 'cook')).toBe(1);
  });

  it('should handle empty strings correctly', async () => {
    const levenshtein = await getLevenshtein();
    expect(levenshtein('', 'abc')).toBe(3);
    expect(levenshtein('abc', '')).toBe(3);
    expect(levenshtein('', '')).toBe(0);
  });

  it('should handle strings of different lengths', async () => {
    const levenshtein = await getLevenshtein();
    expect(levenshtein('sitting', 'kitten')).toBe(3);
    expect(levenshtein('flaw', 'lawn')).toBe(2);
  });
});
