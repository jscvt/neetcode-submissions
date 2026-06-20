class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length - 1
        let center = null

        while(left <= right) {
            center = Math.floor((right + left) / 2)
            if(nums[center] < target) {
                left = center + 1
            }
            else if(nums[center] > target) {
                right = center - 1
            }
            else {
                return center
            }
        }

        return -1

    }
}
