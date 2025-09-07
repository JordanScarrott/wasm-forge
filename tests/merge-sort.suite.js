import { describe, it, expect } from 'vitest';

export function runMergeSortTests({ mergeSort, name }) {
  describe(`${name} Merge Sort`, () => {
    it('should sort an array of numbers in ascending order', () => {
      const arr = [5, 3, 8, 4, 2];
      expect(mergeSort(arr)).toEqual([2, 3, 4, 5, 8]);
    });

    it('should handle an empty array', () => {
      const arr = [];
      expect(mergeSort(arr)).toEqual([]);
    });

    it('should handle an array with a single element', () => {
      const arr = [1];
      expect(mergeSort(arr)).toEqual([1]);
    });

    it('should handle an array that is already sorted', () => {
      const arr = [1, 2, 3, 4, 5];
      expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle an array that is sorted in descending order', () => {
      const arr = [5, 4, 3, 2, 1];
      expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle an array with duplicate elements', () => {
      const arr = [5, 3, 8, 4, 2, 3, 5];
      expect(mergeSort(arr)).toEqual([2, 3, 3, 4, 5, 5, 8]);
    });

    it('should handle an array with negative numbers', () => {
      const arr = [-5, 3, -8, 4, -2];
      expect(mergeSort(arr)).toEqual([-8, -5, -2, 3, 4]);
    });

    it('should handle an array with zero', () => {
        const arr = [5, 3, 0, 4, 2];
        expect(mergeSort(arr)).toEqual([0, 2, 3, 4, 5]);
    });
  });
}
