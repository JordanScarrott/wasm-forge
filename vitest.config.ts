import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    include: ['packages/core/tests/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
  },
  resolve: {
    alias: {
      '@wasm-forge/levenshtein': path.resolve(__dirname, 'crates/levenshtein/pkg-test/levenshtein.js'),
      '@wasm-forge/trie': path.resolve(__dirname, 'crates/trie/pkg-test/trie.js'),
      '@wasm-forge/radix_sort': path.resolve(__dirname, 'crates/radix_sort/pkg-test/radix_sort.js'),
    },
  },
});
