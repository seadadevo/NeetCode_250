class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        return [...nums, ...nums]
    }
}


const solutio1 = new Solution()

console.log(solutio1.getConcatenation([1, 2, 3,4]))