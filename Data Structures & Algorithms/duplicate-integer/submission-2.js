class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const arr = []
        for(const num of nums) {
            if(!arr[num]) {
                arr[num] = true
            }
            else {
                return true
            }
        }
        return false
    //   let hashm = new Map()
    //   for(const [index, num] of nums.entries()) {
    //     if(hashm.has(num)) {
    //         return true
    //     }
    //     else {
    //         hashm.set(num, index)
    //     }
    //   }
    //   return false;
    }
}
