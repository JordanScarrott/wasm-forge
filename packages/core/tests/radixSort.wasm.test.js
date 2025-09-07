import { runRadixSortTests } from './radixSort.suite.js';
import { getRadixSort } from '../src/api';
import { beforeAll, describe, it } from 'vitest';

describe('Wasm RadixSort', () => {
  let radixSort;

  beforeAll(async () => {
    radixSort = await getRadixSort();
  });

  // The `it` block is necessary to defer the execution of `runRadixSortTests`
  // until after the `beforeAll` hook has completed and the `radixSort` function
  // has been loaded.
  it('should run wasm tests', () => {
    runRadixSortTests({
      radixSort,
      name: 'Wasm',
    });
  });
});
