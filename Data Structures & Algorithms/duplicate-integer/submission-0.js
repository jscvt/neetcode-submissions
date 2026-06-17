class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const listOfIndex = []
        for(const value of nums) {
            if(listOfIndex[value]) {
                return true;
            }
            else {
                listOfIndex[value] = true;
            }
        }
        return false;

    }
}
