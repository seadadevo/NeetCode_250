class Solution {
    /**
     * @param {number[]} nums [0,1,2,2,3,0,4,2]
     * @param {number} val 2
     * @return {number} [0,1,3,0,4]
     */
    removeElement(nums, val) {
        let k = 0; 
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) {
                nums[k] = nums[i];
                k++;
            }
        }
        return k; 
    }
}


const solutio1 = new Solution();

console.log(solutio1.removeElement([0,1,2,2,3,0,4,2],2));