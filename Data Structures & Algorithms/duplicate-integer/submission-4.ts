class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const counts: Record<number, number> = {}
        for(const num of nums) {
            if(counts[num]) {
                return true
            }
            counts[num] = 1
        }
        return false

    }
}
