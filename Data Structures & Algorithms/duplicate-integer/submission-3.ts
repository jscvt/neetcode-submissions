class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const counts: Record<number, number> = {}
        for(const num of nums) {
            counts[num] = (counts[num] || 0) + 1
        }
        for(const c of Object.values(counts)) {
            if(c > 1) {
                return true
            }
        }
        return false
    }
}
