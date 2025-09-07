import { runRadixSortTests } from './radixSort.suite.js';
import { radixSort } from '../src/implementations/js/radixSort';

runRadixSortTests({
  radixSort,
  name: 'JS',
});
