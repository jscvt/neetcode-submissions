class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const t = 2
        const output = []
        for(let i = 0; i < t * nums.length; i += nums.length) {
            for(const [j, num] of nums.entries()) {
                output[j + i] = num 
            } 
        }
        return output
        
    }
}
