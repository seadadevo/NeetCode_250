class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let stirngword = s.split('').sort().join('')
        let stirngword2 = t.split('').sort().join('')
        if(stirngword === stirngword2) {
            return true 
        } else {
            return false
        }
    }
}

const solutio1 = new Solution()

console.log(solutio1.isAnagram("racecar", "carrace"))