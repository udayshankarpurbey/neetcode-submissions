class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const remainder = new Map();
        for(let i = 0 ; i<nums.length ; i++) {
            const num = nums[i];
            if(remainder.has(num)) {
                return [i , remainder.get(num)];
            } else {
                remainder.set((target - num ), i);
            }
        }
    }
}
