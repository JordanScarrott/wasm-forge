import wasmModule from 'wasm-forge-levenshtein-rust';

export function levenshtein(a: string, b: string): number {
  // All WASM-specific logic and bindings live here.
  return wasmModule.levenshtein(a, b);
}
