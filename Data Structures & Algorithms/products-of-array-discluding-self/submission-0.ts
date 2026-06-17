class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
       const prefix = Array(nums.length).fill(undefined)
       const suffix = Array(nums.length).fill(undefined)
       const final = Array(nums.length).fill(undefined)

       for(const [index, _value] of  nums.entries()) {
        // Prefix
        if (index === 0) {
            prefix[index] = 1;
        }
        else {
            prefix[index] = nums[index - 1] * prefix[index - 1]
        }

      
       }


       for(let i = nums.length - 1; i >= 0; i--) {
        // Suffix
        if (i === nums.length - 1) {
            suffix[i] = 1;
        }
        else {
            suffix[i] = nums[i + 1] * suffix[i + 1]
        }
       }

       console.log(suffix)


       for(const [index,f] of final.entries()) {
            final[index] = prefix[index] * suffix[index]
       }
       return final
    }
}
