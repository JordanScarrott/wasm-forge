import { runLevenshteinTests } from './levenshtein.suite.js';
import { getLevenshtein } from '../src/api';
import { beforeAll, describe, it } from 'vitest';

describe('Wasm Levenshtein', () => {
  let levenshtein;

  beforeAll(async () => {
    levenshtein = await getLevenshtein();
  });

  // The `it` block is necessary to defer the execution of `runLevenshteinTests`
  // until after the `beforeAll` hook has completed and the `levenshtein` function
  // has been loaded.
  it('should run wasm tests', () => {
    runLevenshteinTests({
        levenshtein,
        name: 'Wasm',
    });
  })
});
