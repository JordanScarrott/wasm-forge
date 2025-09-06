import { describe } from 'vitest';
import { levenshtein } from '@wasm-forge/levenshtein';
import { runLevenshteinTests } from './levenshtein.suite.js';

describe('Wasm Levenshtein', () => {
  runLevenshteinTests({ levenshtein, name: 'Wasm' });
});
