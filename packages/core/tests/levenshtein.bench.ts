import { describe, bench } from 'vitest';
import { levenshtein as jsImpl } from '../src/implementations/js';
import { levenshtein as wasmImpl } from '../src/index';

describe('Levenshtein Distance Benchmark', () => {
  const shortStr1 = 'kitten';
  const shortStr2 = 'sitting';

  const mediumStr1 = 'a'.repeat(100);
  const mediumStr2 = 'b'.repeat(100);

  const longStr1 = 'The quick brown fox jumps over the lazy dog';
  const longStr2 = 'The quick brown dog jumps over the lazy fox';

  describe('Short Strings', () => {
    bench('Pure JavaScript Implementation', () => {
      jsImpl(shortStr1, shortStr2);
    });

    bench('WASM-powered Public API', () => {
      wasmImpl(shortStr1, shortStr2);
    });
  });

  describe('Medium Strings (100 chars)', () => {
    bench('Pure JavaScript Implementation', () => {
      jsImpl(mediumStr1, mediumStr2);
    });

    bench('WASM-powered Public API', () => {
      wasmImpl(mediumStr1, mediumStr2);
    });
  });

  describe('Long Strings (sentence)', () => {
    bench('Pure JavaScript Implementation', () => {
      jsImpl(longStr1, longStr2);
    });

    bench('WASM-powered Public API', () => {
      wasmImpl(longStr1, longStr2);
    });
  });
});
