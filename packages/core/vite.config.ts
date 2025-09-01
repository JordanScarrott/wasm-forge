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
  test: {
    // Vitest configuration here
  },
});
