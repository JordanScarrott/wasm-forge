import { runLevenshteinTests } from './levenshtein.suite.js';
import { levenshtein } from '../src/implementations/js';

runLevenshteinTests({
  levenshtein,
  name: 'JS',
});
