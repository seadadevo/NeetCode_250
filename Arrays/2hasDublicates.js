class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const unique = new Set(nums) // [1 , 2 , 3] 
        return unique.size !== nums.length
    }
}


const solutio1 = new Solution()

console.log(solutio1.hasDuplicate([1, 2, 2, 3]))