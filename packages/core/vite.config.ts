import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WasmForgeCore',
      fileName: 'index',
    },
  },
  plugins: [dts()],
  optimizeDeps: {
    include: ['@wasm-forge/levenshtein', '@wasm-forge/trie', '@wasm-forge/radix_trie'],
  },
  resolve: {
    alias: {
      '@wasm-forge/radix_trie': resolve(__dirname, '../../crates/radix_trie/pkg'),
    },
  },
  test: {
    // Vitest configuration here
  },
});
