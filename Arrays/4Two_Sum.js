class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map(); 
        for (let i = 0; i < nums.length; i++) {
            const current = nums[i]
            const complement = target - current
            if(map.has(complement)) {
                return [map.get(complement), i]
            }

            map.set(current, i)
        }
        return [];   
    }
}

const solutio1 = new Solution()

console.log(solutio1.twoSum([5,5, 4, 6], 9))