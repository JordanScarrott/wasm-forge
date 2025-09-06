export async function getLevenshtein() {
  const wasm = await import('@wasm-forge/levenshtein');
  return wasm.levenshtein;
}

export async function getTrie() {
  const wasm = await import('@wasm-forge/trie');
  return wasm.Trie;
}

export async function getRadixSort() {
  const wasm = await import('@wasm-forge/radix_sort');
  return wasm.radix_sort;
}
