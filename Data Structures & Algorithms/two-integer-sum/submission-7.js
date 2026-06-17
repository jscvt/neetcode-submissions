class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map(nums.map((v,i) => [v, i]))
        for(const [index, num] of nums.entries()) {
            const x = target - num;
            if(map.has(x)){
                if(index != map.get(x)) {
                    return [map.get(x), index]
                }
            }
        }
        return []
    } 
}
