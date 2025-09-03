class RadixTrieNode<T> {
  children: Map<string, RadixTrieNode<T>>;
  value: T | null;
  isEndOfWord: boolean;

  constructor() {
    this.children = new Map();
    this.value = null;
    this.isEndOfWord = false;
  }
}

export class JSRadixTrie<T> {
  root: RadixTrieNode<T>;

  constructor() {
    this.root = new RadixTrieNode<T>();
  }

  insert(key: string, value: T): void {
    let node = this.root;
    let search = key;

    while (search.length > 0) {
      let found = false;
      for (const [edge, childNode] of node.children.entries()) {
        let i = 0;
        while (i < search.length && i < edge.length && search[i] === edge[i]) {
          i++;
        }

        if (i > 0) {
          found = true;
          if (i === edge.length) {
            // The whole edge is a prefix of the search string
            node = childNode;
            search = search.substring(i);
          } else {
            // The search string and the edge have a common prefix.
            // Split the edge.
            const commonPrefix = edge.substring(0, i);
            const edgeSuffix = edge.substring(i);
            const searchSuffix = search.substring(i);

            const newNode = new RadixTrieNode<T>();
            newNode.children.set(edgeSuffix, childNode);

            node.children.delete(edge);
            node.children.set(commonPrefix, newNode);

            if (searchSuffix.length === 0) {
              // The key is a prefix of an existing key.
              newNode.isEndOfWord = true;
              newNode.value = value;
            } else {
              // Add the new key.
              const newChild = new RadixTrieNode<T>();
              newChild.isEndOfWord = true;
              newChild.value = value;
              newNode.children.set(searchSuffix, newChild);
            }
            return;
          }
          break;
        }
      }

      if (!found) {
        const newNode = new RadixTrieNode<T>();
        newNode.isEndOfWord = true;
        newNode.value = value;
        node.children.set(search, newNode);
        return;
      }
    }

    node.isEndOfWord = true;
    node.value = value;
  }

  find(key: string): T | null {
    let node = this.root;
    let search = key;

    while (search.length > 0) {
      let found = false;
      for (const [edge, childNode] of node.children.entries()) {
        if (search.startsWith(edge)) {
          node = childNode;
          search = search.substring(edge.length);
          found = true;
          break;
        }
      }
      if (!found) {
        return null;
      }
    }

    return node.isEndOfWord ? node.value : null;
  }

  delete(key: string): boolean {
    const deleteRecursively = (node: RadixTrieNode<T>, search: string): boolean => {
      if (search.length === 0) {
        if (!node.isEndOfWord) {
          return false;
        }
        node.isEndOfWord = false;
        node.value = null;

        if (node.children.size === 1) {
            const [edge, childNode] = [...node.children.entries()][0];
            node.children.delete(edge);
            for(const [childEdge, grandChildNode] of childNode.children.entries()){
                node.children.set(edge + childEdge, grandChildNode);
            }
            node.isEndOfWord = childNode.isEndOfWord;
            node.value = childNode.value;
        }
        return true;
      }

      for (const [edge, childNode] of node.children.entries()) {
        if (search.startsWith(edge)) {
          if (deleteRecursively(childNode, search.substring(edge.length))) {
            if (childNode.children.size === 0 && !childNode.isEndOfWord) {
              node.children.delete(edge);
            } else if (childNode.children.size === 1 && !childNode.isEndOfWord) {
              const [childEdge, grandChildNode] = [...childNode.children.entries()][0];
              node.children.delete(edge);
              node.children.set(edge + childEdge, grandChildNode);
            }
            return true;
          }
        }
      }
      return false;
    }

    return deleteRecursively(this.root, key);
  }

  find_all_with_prefix(prefix: string): { key: string, value: T }[] {
    let node = this.root;
    let search = prefix;

    while (search.length > 0) {
      let found = false;
      for (const [edge, childNode] of node.children.entries()) {
        if (search.startsWith(edge)) {
          node = childNode;
          search = search.substring(edge.length);
          found = true;
          break;
        } else if (edge.startsWith(search)) {
            // The prefix is a prefix of an edge.
            const results: { key: string, value: T }[] = [];
            const collectRecursively = (currentNode: RadixTrieNode<T>, currentPrefix: string) => {
                if (currentNode.isEndOfWord) {
                    results.push({ key: currentPrefix, value: currentNode.value! });
                }
                for (const [childEdge, childNode] of currentNode.children.entries()) {
                    collectRecursively(childNode, currentPrefix + childEdge);
                }
            }
            collectRecursively(childNode, prefix + edge.substring(search.length));
            return results;
        }
      }
      if (!found) {
        return [];
      }
    }

    const results: { key: string, value: T }[] = [];
    const collectRecursively = (currentNode: RadixTrieNode<T>, currentPrefix: string) => {
      if (currentNode.isEndOfWord) {
        results.push({ key: currentPrefix, value: currentNode.value! });
      }
      for (const [edge, childNode] of currentNode.children.entries()) {
        collectRecursively(childNode, currentPrefix + edge);
      }
    }

    collectRecursively(node, prefix);
    return results;
  }
}
