class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length - 1

        while (left <= right) {
                const center = Math.floor((left + right) / 2);
                if (nums[center] === target) return center;

                if (nums[left] <= nums[center]) {            // moitié gauche triée
                    if (target >= nums[left] && target < nums[center]) {
                        right = center - 1;
                    } else {
                        left = center + 1;
                    }
                } else {                                      // moitié droite triée
                    if (target > nums[center] && target <= nums[right]) {
                        left = center + 1;
                    } else {
                        right = center - 1;
                    }
                }
            }
        return -1
    }
}
