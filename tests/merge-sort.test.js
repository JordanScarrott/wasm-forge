import { mergeSort } from 'packages/core/src/implementations/js';
import { runMergeSortTests } from './merge-sort.suite.js';

runMergeSortTests({ mergeSort, name: 'JS' });
