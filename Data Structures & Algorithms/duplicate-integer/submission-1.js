class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      let hashm = new Map()
      for(const [index, num] of nums.entries()) {
        if(hashm.has(num)) {
            return true
        }
        else {
            hashm.set(num, index)
        }
      }
      return false;
    }
}
