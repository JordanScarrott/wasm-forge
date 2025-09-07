import { describe, it, expect } from 'vitest';

export function runRadixSortTests({ radixSort, name }) {
  describe(`${name} RadixSort`, () => {
    it('should sort an array of positive integers', () => {
      const arr = [170, 45, 75, 90, 802, 24, 2, 66];
      const sorted = [2, 24, 45, 66, 75, 90, 170, 802];
      expect(radixSort(arr)).toEqual(sorted);
    });

    it('should handle an empty array', () => {
      expect(radixSort([])).toEqual([]);
    });

    it('should handle an array with a single element', () => {
      expect(radixSort([100])).toEqual([100]);
    });

    it('should handle an array that is already sorted', () => {
      const arr = [1, 2, 3, 4, 5];
      expect(radixSort(arr)).toEqual(arr);
    });

    it('should handle an array that is reverse-sorted', () => {
      const arr = [5, 4, 3, 2, 1];
      const sorted = [1, 2, 3, 4, 5];
      expect(radixSort(arr)).toEqual(sorted);
    });

    it('should handle an array with duplicate values', () => {
      const arr = [170, 45, 75, 90, 802, 24, 2, 66, 45];
      const sorted = [2, 24, 45, 45, 66, 75, 90, 170, 802];
      expect(radixSort(arr)).toEqual(sorted);
    });

    it('should handle an array with negative numbers', () => {
      const arr = [-10, -5, -100, -1];
      const sorted = [-100, -10, -5, -1];
      expect(radixSort(arr)).toEqual(sorted);
    });

    it('should handle an array with a mix of positive and negative numbers', () => {
      const arr = [10, -5, 100, -1, 0, -20];
      const sorted = [-20, -5, -1, 0, 10, 100];
      expect(radixSort(arr)).toEqual(sorted);
    });

    it('should handle an array with zeros', () => {
        const arr = [0, 10, 0, -10, 0];
        const sorted = [-10, 0, 0, 0, 10];
        expect(radixSort(arr)).toEqual(sorted);
    });

    it('should handle a large array of random numbers', () => {
        const arr = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 2000) - 1000);
        const sorted = [...arr].sort((a, b) => a - b);
        expect(radixSort(arr)).toEqual(sorted);
      });
  });
}
