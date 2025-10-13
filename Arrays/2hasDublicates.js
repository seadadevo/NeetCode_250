class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let arr = []
        for (let i = 0; i < nums.length; i++) {
            if(arr.includes(nums[i])){
                return true;
            }
            arr.push(nums[i])   
        }
        return false
    }
}


const solutio1 = new Solution()

console.log(solutio1.hasDuplicate([1, 2, 4, 3]))