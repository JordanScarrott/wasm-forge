import { describe } from 'vitest';
import * as wasm from './crates/merge-sort/pkg-test/merge_sort.js';
import { runMergeSortTests } from './merge-sort.suite.js';

describe('Wasm Merge Sort', () => {
  runMergeSortTests({ mergeSort: wasm.mergeSort, name: 'Wasm' });
});
