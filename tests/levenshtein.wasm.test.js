import { describe } from 'vitest';
import { levenshtein } from './crates/levenshtein/pkg-test/levenshtein.js';
import { runLevenshteinTests } from './levenshtein.suite.js';

describe('Wasm Levenshtein', () => {
  runLevenshteinTests({ levenshtein, name: 'Wasm' });
});
