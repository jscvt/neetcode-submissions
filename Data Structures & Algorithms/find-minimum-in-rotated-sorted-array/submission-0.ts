class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let left = 0
        let right = nums.length - 1
        let center = null;
        let min = null

        while(left <= right){
            // Find the shifting point
            center = Math.floor((left + right) / 2);

            if(nums[center] > nums[right]) {
                left = center + 1
            }
            else {
                right = center - 1
            }
            if(min === null || nums[center] < min) {
                min = nums[center]
            }
        }
        return min
    }
}
