class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
  
        for(const [_i, i] of nums.entries()) {
            for (const [_j, j] of nums.entries()) {
                if(_j !== _i) {
                    if ((j + i) === target) {
                        return [_i, _j]
                    }
                }
                
            }        
       } 

       return [0, 0]
    }
}
