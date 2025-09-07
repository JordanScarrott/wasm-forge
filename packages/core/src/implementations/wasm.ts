export async function getLevenshtein() {
  const wasm = await import('@wasm-forge/levenshtein');
  return wasm.levenshtein;
}

export async function getTrie() {
  const wasm = await import('@wasm-forge/trie');
  return wasm.Trie;
}

export async function getMergeSort() {
  const wasm = await import('@wasm-forge/merge-sort');
  return wasm.mergeSort;
}
