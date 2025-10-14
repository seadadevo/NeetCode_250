class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
           for (let j = 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target)
                return [i , j]
            }
            
        }
    }
}

const solutio1 = new Solution()

console.log(solutio1.twoSum([5,5], 10))