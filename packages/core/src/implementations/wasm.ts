export async function getLevenshtein() {
  const wasm = await import('@wasm-forge/levenshtein');
  return wasm.levenshtein;
}

export async function getTrie() {
  const wasm = await import('@wasm-forge/trie');
  return wasm.Trie;
}
