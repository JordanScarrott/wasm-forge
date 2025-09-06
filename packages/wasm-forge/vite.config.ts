import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import wasm from 'vite-plugin-wasm';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'WasmForge',
      fileName: 'index',
    },
  },
  plugins: [dts(), wasm()],
});
