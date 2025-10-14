class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const map = new Map();

    for (const word of strs) {
      const key = word.split("").sort().join("");

      if (map.has(key)) {
        map.get(key).push(word);
      } else {
        map.set(key, [word]);
      }
    }

    return Array.from(map.values());
  }
}

const solutio1 = new Solution();

console.log(solutio1.groupAnagrams(["act","pots","tops","cat","stop","hat"]));
