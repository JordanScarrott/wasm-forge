import { describe, it, expect } from 'vitest';
import { levenshtein } from '../src/index';

describe('levenshtein', () => {
  it('should return 0 for identical strings', () => {
    expect(levenshtein('hello', 'hello')).toBe(0);
  });

  it('should return the length of the other string if one is empty', () => {
    expect(levenshtein('hello', '')).toBe(5);
    expect(levenshtein('', 'world')).toBe(5);
  });

  it('should calculate the correct distance for simple substitutions', () => {
    expect(levenshtein('kitten', 'sitten')).toBe(1);
    expect(levenshtein('saturday', 'sunday')).toBe(3);
  });

  it('should calculate the correct distance for insertions and deletions', () => {
    expect(levenshtein('apple', 'aple')).toBe(1); // deletion
    expect(levenshtein('aple', 'apple')).toBe(1); // insertion
  });

  it('should handle complex cases', () => {
    expect(levenshtein('flaw', 'lawn')).toBe(2);
    expect(levenshtein('gumbo', 'gambol')).toBe(2);
    expect(levenshtein('book', 'back')).toBe(2);
  });

  it('should handle strings with different cases (case-sensitive)', () => {
    expect(levenshtein('Hello', 'hello')).toBe(1);
  });

  it('should handle strings with numbers and symbols', () => {
    expect(levenshtein('12345', '123x5')).toBe(1);
    expect(levenshtein('!@#$', '%^&*')).toBe(4);
  });
});
