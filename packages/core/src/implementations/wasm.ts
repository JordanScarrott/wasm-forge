// eslint-disable-next-line @typescript-eslint/no-var-requires
const levenshteinModule = require('@wasm-forge/levenshtein');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const trieModule = require('@wasm-forge/trie');

export const levenshtein = levenshteinModule.levenshtein;
export const Trie = trieModule.Trie;
