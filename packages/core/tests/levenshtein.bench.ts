import { describe, bench } from 'vitest';
import { levenshtein as jsLevenshtein } from '../src/index';

// Placeholder for the future WASM implementation
const wasmLevenshtein = (a: string, b: string): number => {
  // In a real scenario, this would call the WASM module.
  // For the benchmark, we'll just call the JS version
  // until the real WASM is wired up.
  return jsLevenshtein(a, b);
};

describe('levenshtein benchmark', () => {
  const str1 = 'a'.repeat(100);
  const str2 = 'b'.repeat(100);

  bench('JavaScript implementation', () => {
    jsLevenshtein(str1, str2);
  });

  bench('WASM implementation (placeholder)', () => {
    wasmLevenshtein(str1, str2);
  });

  const longStr1 = 'The quick brown fox jumps over the lazy dog';
  const longStr2 = 'The quick brown dog jumps over the lazy fox';

  bench('JavaScript implementation (long strings)', () => {
    jsLevenshtein(longStr1, longStr2);
  });

  bench('WASM implementation (placeholder, long strings)', () => {
    wasmLevenshtein(longStr1, longStr2);
  });
});
